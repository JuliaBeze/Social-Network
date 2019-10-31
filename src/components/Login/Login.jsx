import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import styles from "./Login.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.login}>
            <div >
                <Field placeholder={"Email"} name={"email"}
                       validate={[required]}
                component = {Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type = {"password"}
                       validate={[required]}
                       component = {Input}/>
            </div>
                <div>
                    <Field component={Input} name={"remember me"} type={"checkbox"}/> remember me
                </div>

                {props.error && <div className={styles.formSummeryError}>
                        {props.error}
                    </div>
                }
                    <div>
                    <button>Login</button>
                    </div>
                    </div>
                    </form>
)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth){
        return <Redirect to ={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})

export default connect (mapStateToProps, {login} )(Login);