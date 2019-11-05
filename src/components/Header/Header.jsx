import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className={s.header}>
        <img
            src='http://pngimg.com/uploads/earth/earth_PNG5.png'/>

        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>{props.login} </div>
                : <NavLink to={'/login'}>Login</NavLink>}<button onClick={props.logout}>Log out</button>
        </div>
    </header>
}





export default Header;