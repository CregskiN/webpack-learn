const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');


const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-inline-source-map',

    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },

    output: {
        filename: '[name].[contenthash].js', // 入口文件输出文件名
        chunkFilename: '[name].[contenthash].chunk.js', // 入口文件间接导入的模块名
    }
}

module.exports = prodConfig;
