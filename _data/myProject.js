require('dotenv').config()

module.exports = function() {
    return {
        environment: process.env.MY_ENVIRONMENT || "DEVELOPMENT",
        host: process.env.HOSTNAME
    };
};