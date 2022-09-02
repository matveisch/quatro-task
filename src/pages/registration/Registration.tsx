import React from 'react';

// images & styles
import './Registration.css';
import logo from '../../images/logo.png';

// components

const Registration = () => {
    return (
        <div id={'registration'}>
            <header>
                <img src={logo} alt="logo"/>
                <h1> <span>פרטי לקוח</span> {'>'} אפשרות משלוח {'>'} אמצעי תשלום</h1>
            </header>
        </div>
    );
};

export default Registration;