import React from 'react';

// images & styles
import './Registration.css';
import logo from '../../images/logo.png';

// components
import UserDataForm from "../../components/user-data-form/UserDataForm";

const Registration = () => {
    return (
        <div id={'registration'}>
            <header>
                <img src={logo} alt="logo"/>
                <h1> <span>פרטי לקוח</span> {'>'} אפשרות משלוח {'>'} אמצעי תשלום</h1>
            </header>
            <UserDataForm />
        </div>
    );
};

export default Registration;