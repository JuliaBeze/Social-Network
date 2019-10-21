import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaouTJ-tkIb1VXuGjDb-UJpC_EILxVA0lss1vPF89ntJRuP1Z'/>
            <NavLink to={path}>{props.name}</NavLink>
        <div>

        </div>
        </div>
}

DialogItem.propTypes ={
    name: PropTypes.string,
    id:PropTypes.number
};

export default DialogItem;

