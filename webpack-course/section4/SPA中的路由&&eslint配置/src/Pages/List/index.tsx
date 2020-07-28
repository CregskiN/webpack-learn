import React from 'react';

interface ListProps {

}

const List: React.FC<ListProps> = () => {

    console.log('Component List did render...');

    return (
        <div>
            component List
        </div>
    )
}

export default List;