const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 代码分析
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const commonConfig = {
    entry: {
        main: './src/index.ts',
    },

    target: 'web',

    module: {
        rules: [{
            test: /\.tsx? | \.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'imports-loader?this=>window'
            }, {
                loader: 'babel-loader'
            }],
        }, {
            test: /\.css?$/,
            exclude: /node_modules/,
            // use: ['style-loader', {
            //     loader: 'css-loader',
            //     options: {
            //         importLoaders: 1,
            //         modules: {
            //             localIdentName: '[name]_[local]-[hash:base64:5]',
            //         }
            //     }
            // }, 'postcss-loader']
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/public/path/to/',
                    },
                },
                'css-loader',
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
            verbose: true, // 打印删除信息
            // cleanOnceBeforeBuildPatterns: ['build']
        }),
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _join: ['lodash', 'join'],
        })
    ],

    optimization: {
        // usedExports: true,

        splitChunks: {
            chunks: 'all',
            // minSize: 30000,
            // // minRemainingSize: 0,
            // maxSize: 0,
            // minChunks: 1,
            // maxAsyncRequests: 6,
            // maxInitialRequests: 4,
            // automaticNameDelimiter: '~',
            // automaticNameMaxLength: 30,
            // name: true,
            // cacheGroups: {
            //     defaultVendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10,
            //         filename: 'file.js'
            //     },
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true
            //     }
            // }
        }
    },
    output: {
        // publicPath: '/', // 这里如果是./会导致HMR无法开启

        path: path.resolve(__dirname, '../build')
    }
}

module.exports = (env) => {
    if (env && env.production) {
        return merge(commonConfig, prodConfig);
    } else {
        return merge(commonConfig, devConfig);
    }
}