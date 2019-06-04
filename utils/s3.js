const knox = require('knox-s3');
const chalk = require('chalk');
const fs = require('fs');

let secrets;
if (process.env.NODE_ENV === 'production') {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require('../secrets'); // secrets.json is in .gitignore
}
const client = knox.createClient({
    key: secrets.AWS_KEY,
    secret: secrets.AWS_SECRET,
    bucket: 'salt-imageboard'
});

module.exports.upload = function (req, res, next) {
    if (!req.file) {
        console.log(chalk.yellow(`No file in post request to /upload`));
        res.sendStatus(500);
    } else {
        const s3Request = client.put(req.file.filename, {
            'Content-Type': req.file.mimetype,
            'Content-Length': req.file.size,
            'x-amz-acl': 'public-read'
        });
        const readStream = fs.createReadStream(req.file.path);
        readStream.pipe(s3Request);
        s3Request.on('response', s3Response => {
            console.log(chalk.blue(`s3Response.statusCode`, s3Response.statusCode));
            const wasSuccessful = s3Response.statusCode === 200;
            if (wasSuccessful) {
                next();
            } else {
                console.log(chalk.yellow(`s3 request not successful`));
                res.sendStatus(500);
            }
        });
    }
};
