import React from 'react';
import s from './../Dialogs.module.css';
import PropTypes from 'prop-types';

const Message = (props) => {


    return <div className={s.dialog}>{props.message}
    <div>
        <img src='http://wallpapers-image.ru/1280x720/city/wallpapers/wallpapers-city-19.jpg'/>
    </div>



    </div>
}

Message.propTypes ={
   message: PropTypes.string
}
export default Message;

