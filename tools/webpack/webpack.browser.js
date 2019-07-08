const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common');

const CSR_BUILD_DIR = path.join(__dirname, '../../public/live/');
const CSR_APP_DIR = path.join(__dirname, '../../public/src');

const envProduction = process.env.NODE_ENV !== 'development';
const BASE_PATH = '../../';

const STATIC_BASE_URL = process.env.STATIC_PATH || '/live/';
const bundleAnalysis = process.env.PERF ? [new BundleAnalyzerPlugin()] : [];

module.exports = merge(common, {
    devtool: 'source-map',
    entry: {
        main: [
            `${CSR_APP_DIR}/browser.js`
        ]
    },
    output: {
        path: CSR_BUILD_DIR,
        filename: !envProduction ? 'juice/js/[name].js' : 'juice/js/[name].[contenthash].js',
        chunkFilename: !envProduction ? 'juice/js/[name].lazy.js' : 'juice/js/[name].[contenthash].lazy.js',
        publicPath: STATIC_BASE_URL
    },
    plugins: [
        ...bundleAnalysis,
        new ManifestPlugin({
            fileName: 'manifest.json'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: envProduction,
                    warning: false,
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            })
        ]
    }
});
