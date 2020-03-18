import React from 'react';
import ReactDOM from 'react-dom';

interface ListProps {

}

const List: React.FC<ListProps> = (props) => {

    console.log('Component List did render...');

    return (
        <div>
            component List
        </div>
    )
}

ReactDOM.render(<List />, document.getElementById('root'));