import React from 'react';
import s from './Post.module.css';
import PropTypes from 'prop-types';

const Post =(props)=> {

    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiZyzSwZ0owZJ_vwWO3-Wt9Bk1vRmy1FFQrkb8Jut7xLhh2_qNQ'/>
            {props.message}
            <div>
                <span> like </span>
            </div>
        </div>

    )
}
Post.propTypes ={
    message:PropTypes.string
};

export default Post;
