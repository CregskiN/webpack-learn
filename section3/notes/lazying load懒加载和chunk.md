## lazying load

es 语法，webpack 可以识别 加快首屏加载速度， 例：react 路由

```js
`写法示例`
`异步导入 1` jsonp
// function getComponent() {
//     return import(/* webpackChunkName: 'lodash' */'lodash').then(({ default: _ }) => { // default兼容commonJS
//         const element = document.createElement('div');
//         element.innerHTML = _.join(['Creg', 'skiN'], '-');
//         return element;
//     })
// }

`异步导入 2`
async function getComponent() {
    const { default: _ } = await import(/* webpackChunkName: 'lodash' */'lodash');
    const element = document.createElement('div');
    element.innerHTML = _.join(['Creg', 'skiN'], '-');
    return element;
}

document.addEventListener('click', () => {
    getComponent().then((element) => {
        document.body.appendChild(element)
    })
})

`同步导入`
// import _ from 'lodash';
// const element = document.createElement('div');
// element.innerHTML = _.join(['Creg', 'skiN'], '-');
// document.body.appendChild(element)
```

## chunk

所有的代码模块都称为 chunk
