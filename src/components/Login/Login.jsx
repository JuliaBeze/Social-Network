import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import styles from "./Login.module.css"
//createField - функиция из FormsControls, для рефакторинга Field
const LoginForm = ({handleSubmit, error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.login}>

                    {createField("Email", "email", [required], Input)}
                    {createField("Password", "password", [required], Input, {type: "password"})}
                    {createField(null, "remember me", [], Input, {type: "checkbox"}, "remember me")}

                {captchaUrl && <img src = {captchaUrl}/>}
                {captchaUrl &&  createField("Symbols from image", "captcha", [required], Input,{})}

                {error && <div className={styles.formSummeryError}>
                    {error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={styles.loginForm}>

        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}

        />
    </div>;
};

const mapStateToProps = (state) => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);