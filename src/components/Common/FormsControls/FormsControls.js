import React from 'react';
import styles from './FormsControls.module.css'
import {required} from "../../../Utils/Validators/validators";
import {Field} from "redux-form";


const FormControl = ({meta:{touched,error},children})=> {
    const showError = touched && error;
    return (

        <div className={styles.formControl + " " + (showError ? styles.error: " ")}>
            <div>
                {children}
            </div>
            { showError && <span>{error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const { input,meta,child,...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/> </FormControl>
    )
};

export const Input = (props) => {
    const {meta,child, input,...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
};


export const createField = (placeholder,name, validate, component,props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validate}
               component={component} {...props} />{text}
    </div>
)
