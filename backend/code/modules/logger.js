const winston = require('winston');
const uuidV1 = require('uuid/v1');

const _generateLogID = () => uuidV1();

let transports = [];

transports.push(new winston.transports.Console({
    level: 'info',
    colorize: true
}));

const logger = new (winston.Logger)({
    transports
});


const getMetadata = (extend = {}) => {
    return Object.assign(extend, {
        appName: process.env.APP_NAME,
        logID: _generateLogID()
    });

};

logger.requestErrorStream = {
    write: function (message, encoding) {
        let meta = getMetadata();
        logger.error("Request Error", message, meta);
    }
};
module.exports = {
    logger,
    loggerMetadata: getMetadata
};