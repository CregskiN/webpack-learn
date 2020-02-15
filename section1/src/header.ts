class Header{


    createHeader(){
        const headerDOM = document.createElement('header');
        headerDOM.innerHTML = '这是头部';
        headerDOM.style.setProperty('font-size', '50px');
        return headerDOM;
    }
}

const header = new Header();



export default header;