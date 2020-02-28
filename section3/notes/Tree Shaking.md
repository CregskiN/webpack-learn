# Tree Shaking 摇树 - 把没用的东西摇晃掉

1. 功能：production 模式下剔除未引入代码 - 按需导入
2. 只支持 ES Module 引入 // 底层是静态引入，TreeShaking 只支持静态引入 common js 是动态
3. 配置方法

> dev模式  
```js
// webpack.config.json
{
  mode = 'development',

  optimization: {
      usedExports: true // 被使用的导出模块 Tree Shaking 但会忽略@babel/core/***等全局导入
  }
}
// package.json
> 对于@babel/polifill 等直接在 window 对象上绑定新语法对象的模块，没有 export ，Treeshaking 默认将其忽略，若需要，需如下添加

{
  "sideEffects": [
      "*.css",
      "core-js/stable",
      "'regenerator-runtime/runtime'"
  ], // Tree Shaking忽略的模块，如import '@babel/core/***'
  或者
   "sideEffects": false
}
```

> prod模式  - 默认配置Tree Shaking
```js
{
  mode = 'production',
}
// package.json
> 对于@babel/polifill 等直接在 window 对象上绑定新语法对象的模块，没有 export ，Treeshaking 默认将其忽略，若需要，需如下添加

{
  "sideEffects": [
      "*.css",
      "core-js/stable",
      "'regenerator-runtime/runtime'"
  ], // Tree Shaking忽略的模块，如import '@babel/core/***'
  或者
   "sideEffects": false
}
```
