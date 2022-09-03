// libraries
import React, {useState} from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import axios from "axios";
import * as Yup from "yup";

// styles and images
import './Login.css';
import closePopup from '../../images/close popup.png';
import logo from '../../images/Group 156.png';

// components
import {LoginProps} from "../../pages/registration/Registration";
import Input from "../../ui/input/Input";
import Preloader from "../preloader/Preloader";

interface Values {
    email: string;
    password: string;
}

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
        .min(8, 'Must contain at least 8 chars'),
})

const Login = (props: LoginProps) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    return (
        <div id="login" style={props.popup ? {display: "flex"} : {display: "none"}}>
            <div id="popup">
                <img id="close-btn" src={closePopup} alt="close-button" onClick={() => props.setPopup(false)}/>
                <header id="popup-header">
                    <img src={logo} alt="logo"/>
                    <h1>כיף לראות אותך שוב</h1>
                </header>
                {!loading ? 
                    <div id="popup-form">
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={async (
                                values: Values,
                                { setSubmitting }: FormikHelpers<Values>
                            ) => {
                                setLoading(true);

                                await axios.post('https://jsonplaceholder.typicode.com/posts', {body: JSON.stringify(values, null, 2)}, {
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                }).then(res => {
                                    setMessage('Form successfully submitted');
                                    console.log(res);
                                    setSubmitting(false);
                                }).catch(err => {
                                    setMessage('Error');
                                    console.log(err);
                                    setTimeout(() => {
                                        setLoading(false);
                                    }, 1000)
                                });
                            }}
                        >
                            {({errors, touched}) => (
                                <Form>
                                    <div className="inputs">
                                        <Input fieldName={'email'}
                                               label={'מייל'}
                                               required={true}
                                               errors={errors.email}
                                               touched={touched.email}
                                               type={'email'}
                                               placeholder={'name@mail.com'}
                                               moreClasses={'login-input'}
                                        />
                                        <Input fieldName={'password'}
                                               label={'סיסמה'}
                                               required={true}
                                               errors={errors.password}
                                               touched={touched.password}
                                               type={'password'}
                                               placeholder={'*******'}
                                               moreClasses={'login-input'}
                                        />
                                    </div>
                                    <h2 className="forgot">שכחתי סיסמה</h2>
                                    <button type="submit">כניסה לחשבון</button>
                                </Form>
                            )}
                        </Formik>
                    </div> :
                    <div className="preloader-container">
                        {message.length === 0 ? <Preloader /> : <h1>{message}</h1>}
                    </div>
                }
                </div>
        </div>
    );
};

export default Login;