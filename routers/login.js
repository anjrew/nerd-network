
const express = require('express');
const router = express.Router();
const routes = require('../routers/routes');
const cookies = require('../utils/cookies');
const { db } = require('../utils/db');
const encryption = require('../utils/encryption');
// const userLoggedInAtEntry = require('../utils/middleware').userLoggedInAtEntry;
const print = require('../utils/print');

// TODO:

router.route(routes.login)
    .get((req, res) => {
        console.log('here');
        res.json({
            error: 'This is an error'
        });
    })

    .post(async (req, res) => {

        const email = req.body.email;
        const password = req.body.password;
        print.info(`Login post REQ BODY IS:`, req.body);
        print.info(`email and password was `, email + password);
        
        // if (!email && !password) {
        try {
            const result = await db.getHashedPWord(email);
            print.info(`Result password`, result);
            const doesMatch = await encryption.checkPassword(password, result.rows[0].password);
                
            let userProfile;

            if (doesMatch) { userProfile = await  db.findUserEmail(email).rows[0]; }
            print.info(' The user profile from login is ', userProfile);
            req.session[cookies.user] = userProfile.id;
            res.json( userProfile );
                
        } catch (e) {
            print.error(e);
            res.json({
                error: "Not all fields were filled"
            });
        }

            
        // } else {
        //     print.error('Not all fields were filled in login page');
        //     res.json({
        //         error: "Not all fields were filled"
        //     });
        // }
    });


module.exports = router;