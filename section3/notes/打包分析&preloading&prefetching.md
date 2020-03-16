## 1. 打包分析工具

### 1.analyzer (官方提供)

https://github.com/webpack/analyse

执行命令

> webpack --profile --json > stats.json

### 2.webpack-chart

> https://alexkuz.github.io/webpack-chart/

### 3.webpack-bundle-analyzer 力荐！

> https://github.com/webpack-contrib/webpack-bundle-analyzer

---

`性能提升思考` ： 首先考虑核心代码利用率，比加载js等待执行更重要

> command + shift + P 查询 code coverage 可显示代码利用率

### 思考：异步代码等待交互时才加载，用户体验会不会受带宽影响？受带宽局限出现很多问题？

## 2. 解决方法：webpackPrefetch

> `在首屏核心代码加载完毕，带宽空闲时完成加载` (推荐, 最优的代码结构) 

在浏览器兼容可能有些问题

``` js
document.addEventListener("click", () => {
    import( /* webpackPrefetch: true */ "./component").then(
        ({
            default: func
        }) => {
            func();
        }
    );
});
```

> `与首屏核心代码一起加载` 

``` js
document.addEventListener("click", () => {
    import( /* webpackPreload: true */ "./component").then(({
        default: func
    }) => {
        func();
    });
});
```

