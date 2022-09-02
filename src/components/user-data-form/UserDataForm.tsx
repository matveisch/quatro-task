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
        <div id={'user-data-form'}>
            <h1 id={'login-question'}>האם ברשותך חשבון באתר? התחבר/י לחשבון</h1>
            <header>
                <h1>פרטי משתמש</h1>
            </header>
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
                    <div id={'user-data'}>
                        <div className="input">
                            <label htmlFor="email"><span>*</span>מייל</label>
                            <Field id="email" name="email" type="email"/>
                        </div>
                        <div id="passwords">
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

                    <label htmlFor="subscription">אני מאשר/ת קבלת פרסומים למייל</label>
                    <Field id="subscription" name="subscription" type="checkbox"/>
                </Form>
            </Formik>
        </div>
    );
};

export default UserDataForm;