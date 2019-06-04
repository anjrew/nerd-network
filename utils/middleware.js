
const cookies = require('./cookies');
const routes = require('../routers/routes');
const print = require('../utils/print');

function userLoggedIn (req, res, next) {
    const userId = req.session[cookies.userId];
    if (!userId) {
        // if signatureId exists, this if block will run!
        // this is my signed route
        print.warning('Going to signed in midddleware');
        res.redirect(routes.home);
    } else {
        next();
    }
}
module.exports.userLoggedIn = userLoggedIn;



