const express = require('express');
const router = express.Router();
const routes = require('./routes');
const { db } = require('../utils/db');
const chalk = require('chalk');
// Used to upload files to the hard drive
const multer = require('multer');
// Changes the name of the file to be somthing unique
const uidSafe = require('uid-safe');
const path = require('path');
const s3 = require('../utils/s3s3');
const encryption = require('../utils/encryption');

let secrets;
if (process.env.NODE_ENV === 'production') {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require('../secrets'); // secrets.json is in .gitignore
}

const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        const route = `${global.appRoot}/uploads`;
        console.log(route);
        callback(null, route);
    },
    filename: function (req, file, callback) {
        uidSafe(24).then(function (uid) {
            console.log(chalk.yellow(uid + path.extname(file.originalname)));
            callback(null, uid + path.extname(file.originalname));
        });
    }
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152
    }
});

router.route(routes.upload)
    // .all((req, res) => console.log(chalk.blue('Here')))
    .post(uploader.single('file'), s3.upload, (req, res) => {
    // If nothing went wrong the file is already in the uploads directory
        if (req.file) {
            const url = secrets.AWS_URL + req.file.filename;

            encryption.hashPassword(req.body.password).then((hashedP) => {
                db.addImage(url, req.body.username, req.body.title, req.body.description, hashedP)
                    .then((results) => {
                        results = results.rows.map((result) => {
                            return result;
                        });
                        const responseData = {
                            success: true,
                            id: results[0].id,
                            url: results[0].url,
                            username: results[0].username,
                            title: results[0].title,
                            description: results[0].description
                        };
                        res.status(200).json(responseData);
                    }).catch((e) => {
                        console.log(chalk.red(`Error uploading to the server`));
                        res.status(500).json({
                            success: false,
                            message: 'Failed to upload to the database'
                        });
                    });
            });
        } else {
            console.log(chalk.red(`Error uploading to the server`));
            res.status(500).json({
                success: false,
                message: 'Failed to upload to the server. Make sure your detsils are filled in.'
            });
        }
    });

router.route(ROUTES.UPLOAD)
    .get((req, res, next) => {
        db.getImages().then((result) => {
            res.json(result.rows);
        }).catch((e) => {
            console.log(chalk.red(`error`));
            res.sendStatus(500).json({
                success: false,
                message: 'Failed to communicate with the server.'
            });
        });
    });

module.exports = router;
