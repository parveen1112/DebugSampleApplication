const webpack = require('webpack');

const browserConfig = require('./webpack.browser');
const serverConfig = require('./webpack.server');

module.exports = [
    browserConfig,
    serverConfig
];

