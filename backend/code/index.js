require('dotenv').config({ path: `${__dirname}/.env` });

const server = require(`${__dirname}/modules/server`);
const {
    logger,
    loggerMetadata
} = require(`${__dirname}/modules/logger`);
/**
 * Fire in the hole!
 */
logger.log('info', `${process.env.APP_NAME} restarted`, loggerMetadata());

process.on('uncaughtException', err => {
    logger.log('error', `${err.message}`, loggerMetadata({
        stack: err.stack
    }));
});




