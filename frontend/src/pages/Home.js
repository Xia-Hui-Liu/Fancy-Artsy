import React from 'react';
import logo from '../asset/logo.png';

const Home = () => {
    return (
        <>
            <div className="main">
                <div>
                    <img src={logo} alt='logo' className='logo'/>   
                </div>
                <div className='main-content'>
                    <h1 className="main-title">FANCY ARTSY</h1>
                    <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam auctor, nisl eget ultricies tincidunt, nunc nisl lacinia nisl,
                    vitae aliquam nunc nisl nec nunc. Nullam auctor, nisl eget ultricies tincidunt,
                    nunc nisl lacinia nisl, vitae aliquam nunc nisl nec nunc. Nullam auctor, nisl eget ultricies tincidunt,
                    nunc nisl lacinia nisl, vitae aliquam nunc nisl nec nunc. Nullam auctor, nisl eget ultricies tincidunt,
                    </p>
                    <button className="main-button">Shop Now</button>
                </div>
            </div>
        </>
    );
}




export default Home;