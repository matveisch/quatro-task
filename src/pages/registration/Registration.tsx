import React, {Dispatch, SetStateAction, useState} from 'react';

// images & styles
import './Registration.css';
import logo from '../../images/logo.png';

// components
import UserDataForm from "../../components/user-data-form/UserDataForm";
import Login from "../../components/login/Login";
import Preloader from "../../components/preloader/Preloader";

export interface LoginProps {
    popup: boolean,
    setPopup: Dispatch<SetStateAction<boolean>>;
}

export interface UserDataProps {
    popup: boolean,
    setPopup: Dispatch<SetStateAction<boolean>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setMessage: Dispatch<SetStateAction<string>>;
}

const Registration = () => {
    const [popup, setPopup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    return (
        <div id='registration'>
            <header id='registration-header'>
                <img src={logo} alt="logo"/>
                <h1> <span>פרטי לקוח</span> {'>'} אפשרות משלוח {'>'} אמצעי תשלום</h1>
            </header>
            {!loading ?
                <UserDataForm popup={popup} setPopup={setPopup} setLoading={setLoading} setMessage={setMessage}/> :
                <div className="preloader-container">
                    {message.length === 0 ? <Preloader /> : <h1>{message}</h1>}
                </div>
            }
            <Login popup={popup} setPopup={setPopup}/>
        </div>
    );
};

export default Registration;