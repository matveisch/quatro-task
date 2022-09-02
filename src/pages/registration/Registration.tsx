import React from 'react';

import logo from '../../images/logo.png';

const Registration = () => {
    return (
        <div id={'registration'}>
            <header>
                <img src={logo} alt="logo"/>
                <h1>פרטי לקוח {'>'} אפשרות משלוח {'>'} אמצעי תשלום</h1>
            </header>
        </div>
    );
};

export default Registration;