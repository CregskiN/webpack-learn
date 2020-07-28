import React from 'react';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {

    console.log('Component Home did render...');

    return (
        <div>
            component Home
        </div>
    )
}

export default Home;