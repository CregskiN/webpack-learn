const webpack = require('webpack');

const devConfig = {
    mode: 'development',

    devtool: 'eval-cheap-inline-module-source-map',

    devServer: {
        contentBase: '../build',
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

    output: {
        filename: '[name].js', // 入口文件输出文件名
        chunkFilename: '[name].chunk.js', // 入口文件间接导入的模块名
    }

}
module.exports = devConfig;