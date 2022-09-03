import React, {Dispatch, SetStateAction, useState} from 'react';

// images & styles
import './Registration.css';
import logo from '../../images/logo.png';

// components
import UserDataForm from "../../components/user-data-form/UserDataForm";
import Login from "../../components/login/Login";

export interface Props {
    popup: boolean,
    setPopup: Dispatch<SetStateAction<boolean>>;
}

const Registration = () => {
    const [popup, setPopup] = useState(false);

    return (
        <div id={'registration'}>
            <header>
                <img src={logo} alt="logo"/>
                <h1> <span>פרטי לקוח</span> {'>'} אפשרות משלוח {'>'} אמצעי תשלום</h1>
            </header>
            <UserDataForm popup={popup} setPopup={setPopup}/>
            <Login popup={popup} setPopup={setPopup}/>
        </div>
    );
};

export default Registration;