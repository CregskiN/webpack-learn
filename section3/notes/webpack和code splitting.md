## 1. CleanWebpackPlugin

https://github.com/johnagan/clean-webpack-plugin  
http://www.imooc.com/article/289614

## 2. lodash

> yarn add lodash -D

```js
const s = _.join(["1", "2", "3"], "***");
```

## 3. code splitting 代码分割 `多入口&多出口`

`代码分割提升加载速度`这件事本身与 webpack 无关

> 1. `多entry`

webpack 默认将代码打包到一个.js，打包文件可能非常大，加载速度慢。此配置可将入口文件分别打包

```json
entry: {
        lodash: './src/lodash.ts',
        main: './src/index.ts',
    }
```

> 2. `同步异步import代码分割` webpack 底层使用 SplitChunksPlugin 插件

```js
`同步`;
直接源文件import即可;
// config1 将 import 的库单独打包，配合 html-webpack-plugin，html 内自动多\<script>标签引入

`异步`;
//异步加载自动分割
function getComponent() {
  return import("lodash").then(({ default: _ }) => {
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

> @babel/plugin-syntax-dynamic-import 支持异步 import

```js
`webpack.config.js`
{
    ...,
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
    ...,
}

```

### 自定义chunks名语法 - magic component
