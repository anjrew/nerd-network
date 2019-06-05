const express = require('express');
const router = express.Router();
const routes = require('../routers/routes');
const cookies = require('../utils/cookies');
const { db } = require('../utils/db');
const print = require('../utils/print');


router.route(routes.update)
    .post(async(req, res) => {
        const userId = req.session[cookies.userId];
        print.props(req.body);
        try {
            var result = {}
            for (const prop in req.body) {
                const value = req.body[prop];
                print.info('userId is  ',  userId);
                print.info('prop is  ',  prop);
                print.info('value is  ',  value);
                result = await db.updateField(userId, prop, value);
                print.success(result);
            }
            print.props(user);
            const user = result.rows[0];
            print.success("Got the user from the database with details and sending", user);
            res.json(user);
        } catch (e) {
            print.error('Error', e);
            res.status(500).json({
                error: e
            });
        }
    });


module.exports = router;