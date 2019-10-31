import React from 'react';
import s from './../Dialogs.module.css';
import PropTypes from 'prop-types';
// сообщения пользователей в диалогах
const Message = (props) => {


    return <div className={s.dialog}>

    <div>
        <img src='http://test.trk.company/Portal
        s/5/xNews/uploads/2017/1/30/w513h5131371296185messages.png'/> {props.message}
    </div>



    </div>
}

Message.propTypes ={
   message: PropTypes.string
}
export default Message;

