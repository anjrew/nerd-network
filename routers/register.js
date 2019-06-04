
const express = require('express');
const router = express.Router();
const routes = require('../routers/routes');
const cookies = require('../utils/cookies');
const { db, ids } = require('../utils/db');
const encryption = require('../utils/encryption');
const userLoggedInAtEntry = require('../utils/middleware').userLoggedInAtEntry;
const print = require('../utils/print');

router.route(routes.registration)
    .get((req, res, next) => {
        console.log('here');
        res.json({});
    })

    .post( async (req, res) => {
        if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password) {
            print.error('Not all fields were filled');
            res.json({
                error: "Not all fields were filled"
            });
        }
        const hashedP = await encryption.hashPassword(req.body.password);
        const result = await db.addUser(req.body.firstname, req.body.lastname, req.body.email, hashedP);
        let id = result.rows[0].id;
        req.session[cookies.user] = id;
        res.json( result.rows[0] );
    });


module.exports = router;