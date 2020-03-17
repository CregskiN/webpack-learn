const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {

    entry: {
        main: path.resolve(__dirname, '../src/index.tsx')
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }, {
                loader: 'ts-loader'
            }, {
                loader: 'eslint-loader'
            }]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }, {
                loader: 'eslint-loader'
            }]
        }, {
            test: /\.?css$/,
            exclude: /node_modules/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader']
        }]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
        new HtmlWebpackPlugin({
            title: 'SPA router configuration',
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin(),
    ],

    output: {
        path: path.resolve(__dirname, '../build')
    }
}