import React from 'react';

import s from './Sidebar.module.css'

const Sidebar = (props) => {

    let {friends = []} = props;

let newSidebar = friends.map(friend => friend.name);

    return (
        <div className={s.sidebar}>
            <h2> Friends </h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpUDGdJs1vlbNW3IswpA_4nxL9ys5poeNb99kdGEnmM19tvF3"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpUDGdJs1vlbNW3IswpA_4nxL9ys5poeNb99kdGEnmM19tvF3"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpUDGdJs1vlbNW3IswpA_4nxL9ys5poeNb99kdGEnmM19tvF3"/>
            <div className={s.sidebarFriends}>
                {newSidebar}
        </div>
        </div>
    )
    }

export default Sidebar;