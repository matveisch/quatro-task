import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './UserDataForm.css';

import {UserDataProps} from "../../pages/registration/Registration";
import Input from "../../ui/input/Input";

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
    password: Yup.string()
        .required('Required')
        .min(8, 'Must contain at least 8 chars'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    secondName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    address: Yup.string()
        .required('Required'),
    houseNumber: Yup.string()
        .required('Required'),
    city: Yup.string()
        .required('Required'),
    apartmentNumber: Yup.string()
        .required('Required'),
    intercomCode: Yup.string()
        .required('Required'),
    phone: Yup.string()
        .matches(/^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$/, 'Must match format 05[x][-][0-9]{7}')
        .required('Required'),
});

const UserDataForm = (props: UserDataProps) => {
    return (
        <div id='user-data-form'>
            <h1 id='login-question'>האם ברשותך חשבון באתר? <span
                style={{cursor: 'pointer'}}
                onClick={() => {props.setPopup(true)}}
            >התחברי לחשבון</span></h1>
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
                onSubmit={async (
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    props.setLoading(true);

                    await axios.post('https://jsonplaceholder.typicode.com/posts', {body: JSON.stringify(values, null, 2)}, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(res => {
                        props.setMessage('Form successfully submitted');
                        console.log(res);
                        setSubmitting(false);
                    }).catch(err => {
                        props.setMessage('Error');
                        console.log(err);

                        setTimeout(() => {
                            props.setLoading(false);
                        }, 1000)
                    });
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <h1 className='header'>פרטי משתמש</h1>
                        <div className='data-inputs'>
                            <Input fieldName={"email"} label={'מייל'} required={true} errors={errors.email} touched={touched.email} type={'email'} />
                            <div className="grid">
                                <Input fieldName={"password"} label={'בחר סיסמה'} required={true} errors={errors.password} touched={touched.password} placeholder={"*******"} />
                                <Input fieldName={"confirmPassword"} label={'אימות סיסמה'} required={true} errors={errors.confirmPassword} touched={touched.confirmPassword} placeholder={"*******"} />
                            </div>
                        </div>
                        <div id="checkbox">
                            <label htmlFor="subscription">אני מאשר/ת קבלת פרסומים למייל</label>
                            <Field id="subscription" name="subscription" type="checkbox"/>
                        </div>
                        <h1 className="header">כתובת למשלוח</h1>
                        <div className="data-inputs">
                            <div className="grid">
                                <Input fieldName={"firstName"} label={'שם פרטי'} required={true} errors={errors.firstName} touched={touched.firstName} />
                                <Input fieldName={"secondName"} label={'שם משפחה'} required={true} errors={errors.secondName} touched={touched.secondName} />
                                <Input fieldName={"address"} label={'כתובת- רחוב, מס׳ בית, עיר'} required={true} errors={errors.address} touched={touched.address} placeholder={'בזל'}/>
                                <Input fieldName={"houseNumber"} label={'מס׳ בית'} required={true} errors={errors.houseNumber} touched={touched.houseNumber} placeholder={'2'}/>
                                <Input fieldName={"city"} label={'עיר'} required={true} errors={errors.city} touched={touched.city} placeholder={'תל אביב יפו'}/>
                                <div className="mini-inputs">
                                    <Input fieldName={"apartmentNumber"} label={'דירה / כניסה'} required={true} errors={errors.apartmentNumber} touched={touched.apartmentNumber} placeholder={'1'} moreClasses={'mini-input'} />
                                    <Input fieldName={"intercomCode"} label={'קוד לבניין'} required={true} errors={errors.intercomCode} touched={touched.intercomCode} placeholder={'1234#'} moreClasses={'mini-input'} />
                                </div>
                                <Input fieldName={"phone"} label={'טלפון'} required={true} errors={errors.phone} touched={touched.phone} placeholder={'050-00223356'} type={'phone'}/>
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