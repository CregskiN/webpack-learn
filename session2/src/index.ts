// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

const arr = [
  new Promise(() => {
    console.log("Promise执行了");
  }),
  new Promise(() => { })
];

// arr.map(value => {
//   value.then(res => {
//     console.log("then执行了");
//   });
// });


// console.log([1, 2, 3].includes(1));
