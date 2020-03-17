# eslint

## 使用方法

### 1. 基础配置

安装

> yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks typescript

`.eslintrc.js` 

``` js
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react-hooks',
    ],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-var": 0,
        // // 禁止使用 var
        // 'no-var': "error",
        // // 优先使用 interface 而不是 type
        // '@typescript-eslint/consistent-type-definitions': [
        //     "error",
        //     "interface"
        // ],
    },
    // env: {                          //指定代码的运行环境
    //     browser: true,
    //     node: true,
    // },
    settings: { //自动发现React的版本，从而进行规范react代码
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    parserOptions: { //指定ESLint可以解析JSX语法
        "ecmaVersion": 2019,
        "sourceType": 'module',
        "ecmaFeatures": {
            jsx: true
        }
    }
};
```

`eslintignore.js` 

``` plainText
# don't ever lint node_modules
node_modules
# don't lint build output (make sure it's set to your correct build folder name)
build
# don't lint nyc coverage output
coverage
# webpack配置文件
config
```

### 2. 使用方法

1. 编辑器插件

> vscode的eslint插件，无需配置setting.json

2. 命令行检测

> "test": "yarn eslint .--ext .js, .jsx, .ts, .tsx "

3. eslint-loader

配置：
`webpack.dev.js` 

``` js
    devServer: {
        overlay: true, // 有报错信息以蒙版显示在网页上
        contentBase: '../public',
        port: 8080,
        open: true,
        hot: true,
        compress: true,
        hotOnly: true,
        historyApiFallback: true,
    },
```

`webpack.common.js` 

``` js
 module: {
     rules: [{
         test: /\.tsx?$/,
         exclude: /node_modules/,
         use: [{
             loader: 'babel-loader'
         }, {
             loader: 'ts-loader'
         }, {
             loader: 'eslint-loader',
             options: {
                 cache: true,
                 enforce: 'pre',
             }
         }]
     }, {
         test: /\.js$/,
         exclude: /node_modules/,
         use: [{
             loader: 'babel-loader'
         }, {
             loader: 'eslint-loader'
         }]
     }, {
         test: /\.?css$/,
         exclude: /node_modules/,
         use: [{
             loader: MiniCssExtractPlugin.loader
         }, 'css-loader']
     }]
 },
```

