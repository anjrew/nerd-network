const chalk = require('chalk');


module.exports = {
    error: function (message) {
        console.log(chalk.red(`Error: ${message}`));
    },
    info: function (message) {
        console.log(chalk.bgBlue(`Info: ${message}`));
    },
    warning: function (message) {
        console.log(chalk.bgYellow(`Warning: ${message}`));
    },
    success: function (message) {
        console.log(chalk.bgGreen(`Success: ${message}`));
    }
};