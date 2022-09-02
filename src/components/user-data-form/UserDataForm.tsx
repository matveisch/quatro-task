import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import './UserDataForm.css';

interface Values {
    email: string;
    password: string;
    confirmPassword: string;
    subscription: boolean;
    firstName: string;
    secondName: string;
    address: string;
    houseNumber: any;
    city: string;
    apartmentNumber: any;
    intercomCode: string;
    phone: any;
}

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    secondName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .required('Required')
        .min(8, 'Password is too short - should be 8 chars minimum')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const UserDataForm = () => {
    return (
        <div id='user-data-form'>
            <h1 id='login-question'>האם ברשותך חשבון באתר? <span>התחבר/י לחשבון</span></h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    subscription: false,
                    firstName: '',
                    secondName: '',
                    address: '',
                    houseNumber: '',
                    city: '',
                    apartmentNumber: '',
                    intercomCode: '',
                    phone: ''

                }}
                validationSchema={SignupSchema}
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
                {({errors, touched}) => (
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
                                    {errors.password && touched.password ? (
                                        <div>{errors.password}</div>
                                    ) : null}
                                </div>
                                <div className="input">
                                    <label htmlFor="confirmPassword"><span>*</span>אימות סיסמה</label>
                                    <Field id="confirmPassword" name="confirmPassword" placeholder="*******" />
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <div>{errors.confirmPassword}</div>
                                    ) : null}
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
                                    <label htmlFor="firstName"><span>*</span>שם פרטי</label>
                                    <Field id="firstName" name="firstName" />
                                    {errors.firstName && touched.firstName ? (
                                        <div>{errors.firstName}</div>
                                    ) : null}
                                </div>
                                <div className="input">
                                    <label htmlFor="secondName"><span>*</span>שם משפחה</label>
                                    <Field id="secondName" name="secondName" />
                                    {errors.secondName && touched.secondName ? (
                                        <div>{errors.secondName}</div>
                                    ) : null}
                                </div>
                                <div className="input">
                                    <label htmlFor="address"><span>*</span>כתובת- רחוב, מס׳ בית, עיר</label>
                                    <Field id="address" name="address" placeholder="בזל"/>
                                </div>
                                <div className="input">
                                    <label htmlFor="houseNumber"><span>*</span>מס׳ בית</label>
                                    <Field id="houseNumber" name="houseNumber" placeholder="2"/>
                                </div>
                                <div className="input">
                                    <label htmlFor="city"><span>*</span><span>*</span>עיר</label>
                                    <Field id="city" name="city" placeholder="תל אביב יפו"/>
                                </div>
                                <div className="mini-inputs">
                                    <div className="input mini-input">
                                        <label htmlFor="apartmentNumber"><span>*</span>דירה / כניסה</label>
                                        <Field id="apartmentNumber" name="apartmentNumber" placeholder="1"/>
                                    </div>
                                    <div className="input mini-input">
                                        <label htmlFor="intercomCode"><span>*</span>קוד לבניין</label>
                                        <Field id="intercomCode" name="intercomCode" placeholder="1234#"/>
                                    </div>
                                </div>
                                <div className="input">
                                    <label htmlFor="phone"><span>*</span><span>*</span>טלפון</label>
                                    <Field id="phone" name="phone" placeholder="050-00223356" type="phone"/>
                                </div>
                            </div>
                        </div>
                        <div id="buttons">
                            <button type="submit" className="to-shipping">המשך לאפשרויות משלוח</button>
                            <button className="to-cart" type="button">{'<'} חזרה לעגלת הקניות</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserDataForm;