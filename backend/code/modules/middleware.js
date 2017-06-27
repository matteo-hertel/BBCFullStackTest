const cors = require(`${__dirname}/../middlewares/cors`);

const attachMiddlewares = (router) => {
    cors(router);
    return router;
};

module.exports = attachMiddlewares;
