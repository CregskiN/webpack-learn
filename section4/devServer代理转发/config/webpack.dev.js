

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
        proxy: {
            '/react/api': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true, // 应对网站对防爬虫的代理转发
                pathRewrite: {
                    'header.json': 'demo.json' // 将API中header.json替换为demo.json
                }
            }
        }
        //
        // 只在devserver下才生效
        // 将/react/api开头的http请求，转发到http://127.0.0.1:8080
    },
}

module.exports = merge(devConfig, commonConfig);