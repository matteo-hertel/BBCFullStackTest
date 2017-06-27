const express = require('express');
const app = express();

const helmet = require('helmet');
const router = require(`${__dirname}/router`);
const middleware = require(`${__dirname}/middleware`);
const morgan = require(`${__dirname}/../middlewares/morgan`);
/**
 * Use helmet to take care of all the security related bits for http requests
 * it's an amazing package
 */
app.use(helmet());
/**
 * Attach any middleware you might need
 */
middleware(app);
/**
 * Use morgan to log HTTP errors, extremely useful for troubleshooting 
 */
morgan(app);
/**
 * Load all the routes in
 */
app.use(router);
/**
 * Listen from the port configured in the env
 */
app.listen(process.env.SERVER_PORT);
/**
 * export the module in order to be able to test it
 */
module.exports = app;
