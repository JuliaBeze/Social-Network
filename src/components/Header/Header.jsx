import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6az6If25PA-T4UXX_HlcITqOUqfrozgiI9twStim2cCZ5E6DM&s'/>

        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>{props.login} </div>
                : <NavLink to={'/login'}>Login</NavLink>}
            <div>
                <button onClick={props.logout}>Log out</button>
            </div>
        </div>
    </header>
}





export default Header;