import React from 'react';
import {Field} from "formik";

import './Input.css';

interface Props {
    fieldName: string;
    label: string;
    required: boolean;
    errors: any;
    touched: any;
    type?: string;
    placeholder?: string;
    moreClasses?: string;
}

const Input = (props: Props) => {
    return (
        <div className={`input ${props.moreClasses ? props.moreClasses : null}`}>
            <label htmlFor={props.fieldName}>{props.required ? <span>*</span> : undefined}{props.label}</label>
            <Field id={props.fieldName} name={props.fieldName} type={props.type} placeholder={props.placeholder}/>
            {props.errors && props.touched ? (
                <div className="errors">{props.errors}</div>
            ) : null}
        </div>
    );
};

export default Input;