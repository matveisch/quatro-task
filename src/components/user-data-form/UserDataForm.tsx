import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import {useFormik} from "formik";

import './UserDataForm.css';

interface Values {
    email: string;
    password: string;
    confirmPassword: string;
    subscription: boolean;
}

const UserDataForm = () => {
    return (
        <div id='user-data-form'>
            <h1 id='login-question'>האם ברשותך חשבון באתר? <span>התחבר/י לחשבון</span></h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    subscription: false
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form>
                    <h1 className='header'>פרטי משתמש</h1>
                    <div className='data-inputs'>
                        <div className="input">
                            <label htmlFor="email"><span>*</span>מייל</label>
                            <Field id="email" name="email" type="email"/>
                        </div>
                        <div className="grid">
                            <div className="input">
                                <label htmlFor="password"><span>*</span>בחר סיסמה</label>
                                <Field id="password" name="password" placeholder="*******" />
                            </div>
                            <div className="input">
                                <label htmlFor="confirm-password"><span>*</span>אימות סיסמה</label>
                                <Field id="confirm-password" name="confirm-password" placeholder="*******" />
                            </div>
                        </div>
                    </div>
                    <div id="checkbox">
                        <label htmlFor="subscription">אני מאשר/ת קבלת פרסומים למייל</label>
                        <Field id="subscription" name="subscription" type="checkbox"/>
                    </div>
                    <h1 className="header">כתובת למשלוח</h1>
                    <div className="data-inputs">
                        <div className="grid">
                            <div className="input">
                                <label htmlFor="first-name"><span>*</span>שם פרטי</label>
                                <Field id="first-name" name="first-name" />
                            </div>
                            <div className="input">
                                <label htmlFor="second-name"><span>*</span>שם משפחה</label>
                                <Field id="second-name" name="second-name" />
                            </div>
                            <div className="input">
                                <label htmlFor="address"><span>*</span>כתובת- רחוב, מס׳ בית, עיר</label>
                                <Field id="address" name="address" placeholder="בזל"/>
                            </div>
                            <div className="input">
                                <label htmlFor="house-number"><span>*</span>מס׳ בית</label>
                                <Field id="house-number" name="house-number" placeholder="2"/>
                            </div>
                            <div className="input">
                                <label htmlFor="address"><span>*</span>כתובת- רחוב, מס׳ בית, עיר</label>
                                <Field id="address" name="address" placeholder="בזל"/>
                            </div>
                            <div className="mini-inputs">
                                <div className="input mini-input">
                                    <label htmlFor="address"><span>*</span>דירה / כניסה</label>
                                    <Field id="address" name="address" placeholder="בזל"/>
                                </div>
                                <div className="input mini-input">
                                    <label htmlFor="house-number"><span>*</span>קוד לבניין</label>
                                    <Field id="house-number" name="house-number" placeholder="2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default UserDataForm;