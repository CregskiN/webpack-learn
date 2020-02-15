const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');



module.exports = {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    target: 'web',

    entry: {
        main: './src/index.ts'
    },

    devServer: {
        contentBase: './dist',
        port: 8080,
        open: true, //是否打开浏览器
        hot: true, // 开启HMR
        hotOnly: true, // 即使HMR不生效，也不刷新浏览器
    },

    module: {
        rules: [{
            test: /\.ts?$/,
            exclude: /node_modules/, // 排除在外
            use: [{
                loader: 'babel-loader', 
                options: {
                    presets: [['@babel/preset-env', {
                        modules: false, // 模块使用 es modules ，不使用 commonJS  
                        useBuiltIns: 'usage',
                        targets: {},
                        corejs: { version: 3, proposals: true }// ※(必需) 选择使用core-js版本
                    }]],
                    /* plugins: [['@babel/plugin-transform-runtime', {
                        corejs: 3, // 默认值，可以不写
                        helpers: true, // 默认，可以不写
                        regenerator: true, // 通过 preset-env 已经使用了全局的 regeneratorRuntime, 不再需要 transform-runtime 提供的 不污染全局的 regeneratorRuntime
                        useESModules: true, // 使用 es modules helpers, 减少 commonJS 语法代码 
                    }]] */
                }
            }, {
                loader: 'ts-loader',
            }]
        }, {
            test: /\.(png|jp?g|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]', // placeholder 占位符
                    outputPath: 'images/',
                    limit: 2048
                }
            }],
        }, {
            test: /\.eot|ttf|svg|woff$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }]
        }, {
            test: /\.?css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,  // 在此之前的loader数量
                        // modules: true // 启用模块化css打包
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            // title: 'HTML template',
            template: 'src/static/index.html',
            favicon: 'src/static/avatar.jpg'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist']
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        publicPath: '/',
        filename: '[name].js', // 打包后文件名
        path: path.resolve(__dirname, 'dist') // 输出路径(必须为绝对路径)
    },


}