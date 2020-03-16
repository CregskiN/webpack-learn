// type Param = number;
// export const add = (a: Param, b: Param) => {
//     console.log(a + b);
// }
// export const minus = (a: Param, b: Param) => {
//     console.log(a - b);
// }

console.log(this);
console.log(this === window);


function handleClick() {
    const element = document.createElement('div');
    element.innerHTML = 'hello world';
    document.body.appendChild(element);
}

export default handleClick;