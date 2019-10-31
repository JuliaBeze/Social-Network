import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
// профили пользователей в диалогах
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <img src='https://мессенджеры-скачать.рф/wp-content/uploads/2017/11/Vstupitelnoe-izobrazhenie.png'/>
        <NavLink to={path}>{props.name}</NavLink>
        <div>

        </div>
    </div>
}

DialogItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number
};

export default DialogItem;

