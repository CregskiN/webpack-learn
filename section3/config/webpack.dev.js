const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');


const devConfig = {
    mode: 'development',

    devtool: 'eval-cheap-module-source-map',

    devServer: {
        contentBase: './build',
        port: 8080,
        open: true,
        hot: true, // 模块不支持HMR时，自动刷新
        compress: true,
        // hotOnly: true,  模块不支持HMR时，不刷新，再console中显示HMR失败

    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    optimization: {
        usedExports: true // 开发环境
    },



}
module.exports = merge(commonConfig, devConfig);