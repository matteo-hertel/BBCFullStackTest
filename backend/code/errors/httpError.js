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