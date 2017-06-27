/**
 * Custom error to make life as a developer easier
 * will hold the error stack trace and an anonymous error
 * code will be returned to the HTTP request
 * this will prevent data leak and any front end will map those error
 * to some user friendly messages
 * 
 * @param {any} message 
 */
function HTTPError(message) {
    this.name = 'HTTPError';
    this.message = message || 'Unknow error';
    this.stack = (new Error()).stack;
    this.statusCode = 500;
    this.errorCode = "0x0001";
    this.data = {};
};

HTTPError.prototype = new Error();

module.exports = HTTPError;