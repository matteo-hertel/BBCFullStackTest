const express = require('express');
const app = express();

const helmet = require('helmet');
const router = require(`${__dirname}/router`);
const middleware = require(`${__dirname}/middleware`);
const morgan = require(`${__dirname}/../middlewares/morgan`);
// const bodyParser = require('body-parser');

app.use(helmet());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(bodyParser.json());
middleware(app);
morgan(app);
app.use(router);


app.listen(process.env.SERVER_PORT);


module.exports = app;
