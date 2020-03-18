const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');

const prodConfig = {
    mode: 'production',

    devtool: 'cheap-module-source-map',

    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },

    output: {
        filename: '[name]_[contenthash].js',
        chunkFilename: '[name]_[contenthash].js'
    }
}


module.exports = merge(prodConfig, commonConfig);