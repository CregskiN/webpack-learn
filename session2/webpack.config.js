const path = require('path');


module.exports = {
    mode: 'development',
    // entry: './src/index.ts', // 简写
    entry: {
        main: './src/index.ts',
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
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
                loader: 'file-loader'
            }]
        }, {
            test: /\.scss$/,
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

    output: {
        filename: 'bundle.js', // 打包后文件名
        path: path.resolve(__dirname, 'dist') // 输出路径(必须为绝对路径)
    }
}