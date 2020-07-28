import React from 'react';
import ReactDOM from 'react-dom';

interface HomeProps {

}

const Home: React.FC<HomeProps> = (props) => {

    console.log('Component Home did render...');

    return (
        <div>
            component Home
        </div>
    )
}

ReactDOM.render(<Home />, document.getElementById('root'));