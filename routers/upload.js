const express = require('express');
const router = express.Router();
const routes = require('./routes');
const { db, ids } = require('../utils/db');
const chalk = require('chalk');
// Used to upload files to the hard drive
const multer = require('multer');
// Changes the name of the file to be somthing unique
const uidSafe = require('uid-safe');
const path = require('path');
const s3 = require('../utils/s3');
const encryption = require('../utils/encryption');
const print = require('../utils/print');
const cookies = require('../utils/cookies');

let secrets;
if (process.env.NODE_ENV === 'production') {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require('../secrets'); // secrets.json is in .gitignore
}


const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        const route = `${global.appRoot}/uploads`;
        print.info(`The route in multer is ${route}`);
        callback(null, route);
    },
    filename: function (req, file, callback) {
        uidSafe(24).then(function (uid) {
            print.warning(`The file name in diskStorage is ${uid + path.extname(file.originalname)}`);
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
    .post(uploader.single('file'), s3.upload, async (req, res) => {
    // If nothing went wrong the file is already in the uploads directory
        print.info('In upload post with file');
        if (req.file) {
            print.info("Req session info is", req.session);
            const url = secrets.AWS_URL + req.file.filename;
            const userId = req.session[cookies.userId];
            var result = await db.insertImg(userId, url);
            print.info("The result of the query is", result);
            res.status(200).json(result.rows[0]);

        } else {
            console.log(chalk.red(`Error uploading to the server`));
            res.status(500).json({
                success: false,
                message: 'Failed to upload to the server. Make sure your detsils are filled in.'
            });
        }
    });

module.exports = router;
