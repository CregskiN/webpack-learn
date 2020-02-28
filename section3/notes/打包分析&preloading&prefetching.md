## 打包分析工具

https://github.com/webpack/analyse

`webpack --profile --json > stats.json`

## webpackPrefetch: true

`性能提升思考`： 首先考虑核心代码利用率，比缓存更重要，code coverage

```js
`在首屏核心代码加载完毕，带宽空闲时完成加载`;
document.addEventListener("click", () => {
  import(/* webpackPrefetch: true */ "./component").then(
    ({ default: func }) => {
      func();
    }
  );
});

`与首屏核心代码一起加载`;
document.addEventListener("click", () => {
  import(/* webpackPreload: true */ "./component").then(({ default: func }) => {
    func();
  });
});
```
