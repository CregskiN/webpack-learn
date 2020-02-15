## @babel/core + @babel/preset-env + core-js + @babel/runtime

preset-env： 编译层，将 es6 转 es5。如 const -> var, ()=>{} -> function(){}

> babel7.4 舍弃的 @babel/polyfill = core-js-stable + regenerator-runtime

core-js: 携带`core-js-stable`  
@babel/runtime: 携带`regenerator-runtime`

```js
rules: [
  {
    test: /\.ts?$/,
    exclude: /node_modules/, // 排除在外
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                modules: false, // 模块使用 es modules ，不使用 commonJS 规范
                useBuiltIns: "usage", // 导入方式 entry全导入，usage按需导入(推荐)，false不导入
                targets: {},
                corejs: 3 // ※(必需) 选择使用core-js版本
              }
            ]
          ]
        }
      },
      {
        loader: "ts-loader"
      }
    ]
  }
];
```

> npx webpack # 控制台可看 webpack 简报

> 此配置编译后代码顶部将执行

```
requrie(@babel/core-js/***)
*** 全局导入polyfill
```

## @babel/core + @babel/runtime-corejs3 + @babel/plugin-transform-runtime

@babel/runtime: 所见 helper 代码，`但不支持实例方法`
@babel/runtime-corejs: 在@babel/runtime 基础上提供实例方法支持
@babel/plugin-transform-runtime： 内联

```js
plugins: [
  [
    "@babel/plugin-transform-runtime",
    {
      corejs: 3, // 默认值，可以不写
      helpers: true, // 默认，可以不写
      regenerator: true, // 通过 preset-env 已经使用了全局的 regeneratorRuntime, 不再需要 transform-runtime 提供的 不污染全局的 regeneratorRuntime
      useESModules: true // 使用 es modules helpers, 减少 commonJS 语法代码
    }
  ]
];
```

## @babel/preset-typescript  
`一句话 干掉typescript 和 ts-loader`
