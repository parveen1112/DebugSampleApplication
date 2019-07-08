const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const common = require('./webpack.common');
const BASE_PATH = '../../';
const SSR_BUILD_DIR = path.join(__dirname, `${BASE_PATH}public/live/server`);
const SSR_APP_DIR = path.join(__dirname, `${BASE_PATH}public/src`);

const config = merge(common, {
    target: 'node',
    entry: {
        app: SSR_APP_DIR + '/server.js'
    },
    output: {
        libraryTarget: "commonjs2",
        path: SSR_BUILD_DIR,
        filename: '[name].js'
    },
    // externals: [nodeExternals({
    //     whitelist: ['preact', /one/, /@js-factory/, /onejs/, /hoc/, /store/]
    // })],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});

module.exports = config;