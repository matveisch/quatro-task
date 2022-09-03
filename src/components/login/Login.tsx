import React from 'react';

import './Login.css';
import closePopup from '../../images/close popup.png';

import {Props} from "../../pages/registration/Registration";

const Login = (props: Props) => {
    return (
        <div id="login" style={props.popup ? {display: "flex"} : {display: "none"}}>
            <div id="popup">
                <img id="close-btn" src={closePopup} alt="close-button"/>

            </div>
        </div>
    );
};

export default Login;