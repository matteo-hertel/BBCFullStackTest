require('dotenv').config({ path: `${__dirname}/.env` });
/**
 * the logging system is ready to be extended to use logstash or something similar
 * for now it will use the console :)
 */
const server = require(`${__dirname}/modules/server`);
const {
    logger,
    loggerMetadata
} = require(`${__dirname}/modules/logger`);
/**
 * Fire in the hole!
 */
logger.log('info', `${process.env.APP_NAME} restarted`, loggerMetadata());
/**
 * Be a good node developer and log any uncaught Exception so the program does not crash
 * and checking the logs we can get fix problems
 */
process.on('uncaughtException', err => {
    logger.log('error', `${err.message}`, loggerMetadata({
        stack: err.stack
    }));
});




