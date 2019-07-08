const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BASE_PATH = '../../';
const COMMON_APP_DIR = path.resolve(__dirname, `${BASE_PATH}public/src`);

const envProduction = process.env.NODE_ENV !== "development";

const plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MiniCssExtractPlugin({
        filename: !envProduction ?
            "css/[name].css" :
            "css/[name].[hash].css",
        chunkFilename: !envProduction ? 'juice/css/[name].[id].css' : 'juice/css/[name].[id].[hash].css',

    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardComments: {
                removeAll: true
            }
        },
        canPrint: true
    })
];

const config = {
    watchOptions: {
        ignored: /node_modules/
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.js?/,
                use: "babel-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader' // translates CSS into CommonJS
                    },
                    'sass-loader'// compiles Sass to CSS
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "component": path.resolve(__dirname, `${BASE_PATH}public/src/components`),
            "core": path.resolve(__dirname, `${BASE_PATH}public/core`)
        }
    }
};

module.exports = config;