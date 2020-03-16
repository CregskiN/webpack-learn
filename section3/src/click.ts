function handleClick() {
        const elem = document.createElement('div');
        elem.innerHTML = 'hello world';
        document.body.appendChild(elem);
}

export default handleClick;