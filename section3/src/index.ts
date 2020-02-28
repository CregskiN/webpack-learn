// import 'core-js/stable'; // iterable 在这里
// import 'regenerator-runtime/runtime'; // Promise在这里

document.addEventListener('click', () => {
    import(/* webpackPrefetch: true */'./component').then(({ default: func }) => {
        func();
    })
})