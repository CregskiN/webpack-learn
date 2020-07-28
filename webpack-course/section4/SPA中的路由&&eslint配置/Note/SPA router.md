# SPA router的配置
只能在开发环境devserver生效，开发环境需要结合nginx，每次返回同一个html，让js进行csr

``` js
devServer: {
    contentBase: '../public', // 静态资源目录
    port: 8080,
    open: true,
    hot: true, // 模块不支持HMR时，自动刷新
    compress: true,
    hotOnly: true, // 模块不支持HMR时，不刷新，再console中显示HMR失败
    historyApiFallback: true
    /* {
                rewrites: [
                    { from: /^\.abc.html$/, to: '/index.html' },
                ]
            } */ // 对localhost:8080/list不存在该页面，会转而寻找最初的index.html。即，把所有的index获取都指向index.html
    // 只在本地有效，需要后端同学用nginx模拟wepackDevServer配置路由
},
```

