const bodyParser = require('body-parser')
    .urlencoded({ extended: false });

const responseFactory = require('./responseFactory');
const defaultErrorHandler = require('./defaultErrorHandler');

module.exports = {
    order: [
        'static',
        'cookieParser',
        'bodyParser',
        'csrf',
        'router',
        'responseFactory',
        'defaultErrorHandler'
    ],
    bodyParser,
    responseFactory,
    defaultErrorHandler
};
