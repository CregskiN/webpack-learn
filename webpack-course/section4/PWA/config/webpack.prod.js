const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');

const prodConfig = {
    mode: 'production',

    devtool: 'cheap-module-inline-source-map',

    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },

    plugins: [
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        })
    ],
    output: {
        filename: '[name]_[contenthash].js',
        chunkFilename: '[name]_[contenthash].js'
    }
}


module.exports = merge(prodConfig, commonConfig);