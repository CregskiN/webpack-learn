const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    target: 'web',

    entry: {
        main: './src/index.tsx'
    },

    devServer: {
        contentBase: './build',
        port: 8080,
        open: true,
        hot: true,
        hotOnly: true,
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader'
            ],
        }]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['build']
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        publicPath: '/',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }

}