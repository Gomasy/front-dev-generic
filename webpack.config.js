const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [ 'babel-loader' ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [ 'css-loader', 'postcss-loader', 'sass-loader' ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin([
            path.join(__dirname, '/public/*'),
        ]),
        new CopyWebpackPlugin(
            [
                { from: './src/public' },
            ],
            {
                ignore: [
                    '.DS_Store',
                    '.gitkeep',
                ],
            },
        ),
    ],
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
    },
};
