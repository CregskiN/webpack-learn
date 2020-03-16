# CSS的代码分割

## 1. 老的解决方案

> 实现css in js

styaryle-loader + css-loader + postcss-loader  

## 2. 插件 MiniCssExtractPlugin

* Tree Shaking 会影响css打包。需设置sideEffects

* .css文件名走output.filename

现象分析：生成HTML中会生成对MiniCssExtractPlugin的引用

得出逻辑：所有生成HTML直接引用的文件，都走output.filename，间接引用走chunkFilename

* 默认合并css到一个.css

* 可以设置splitChunkPlugin实现分别打包

## 3. 代码压缩+合并插件 optimize-css-assets-webpack-plugin

* `使用需要修改optimization.minimizer，而修改minimizer会覆盖webpack原有的默认值，因此需要加上terser-webpack-plugin插件` 
* OptimizeCSSAssetsPlugin仅支持mode:'production'的压缩。

    可以理解

* 优先使用先引入的css样式

``` js
    import './A.css';
    import './B.css';
    A， 会完整覆盖掉B
```

```js
import './css/style.css';
import './css/styleSec.css'
console.log('hello world')
```