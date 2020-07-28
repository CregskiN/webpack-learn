## 1. CleanWebpackPlugin

https://github.com/johnagan/clean-webpack-plugin  
http://www.imooc.com/article/289614

---

## 2. lodash 高性能的js工具库

> yarn add lodash -D

``` js
const s = _.join(["1", "2", "3"], "***");
```

---

## 3. code splitting webpack的代码分割。 

`代码分割提升加载速度` 这件事本身与 webpack 无关

### 启用方法1. 使用多entry

webpack 默认将代码打包到一个.js，打包文件可能非常大，加载速度慢。此配置可将入口文件分别打包

``` json
entry: {
        lodash: './src/lodash.ts',
        main: './src/index.ts',
    }
```

### 启用方法2. SplitChunksPlugin  

* splitchunksPlugin负责同步 , 异步import的代码分割 
* webpack 底层也使用 SplitChunksPlugin 插件
* html - webpack - plugin， html 内自动多\ < script > 标签引入
* @babel/plugin-syntax-dynamic-import 支持异步 import + magic component语法

`同步写法` 

``` js
直接源文件import即可;
```

`异步写法` 

``` js
//异步加载自动分割
function getComponent() {
    return import( /*webpackChunkName:"lodash"*/ "lodash").then(({
        default: _
    }) => {
        // default兼容commonJS
        const element = document.createElement("div");
        element.innerHTML = _.join(["Creg", "skiN"], "-");
        return element;
    });
}

getComponent().then(element => {
    document.body.appendChild(element);
});
```

>

``` js
`webpack.config.js` {

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }

}
```

### 自定义chunks名语法 - magic component

