

const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');



const devConfig = {
    mode: 'dev',

    devtool: 'eval-cheap-inline-module-source-map',

    devServer: {
        contentBase: '../build',
        port: 8080,
        open: true,
        hot: true, // 模块不支持HMR时，自动刷新
        compress: true,
        hotOnly: true,  // 模块不支持HMR时，不刷新，再console中显示HMR失败
    },
}

module.exports = merge(devConfig, commonConfig);