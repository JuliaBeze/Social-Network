import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
//https://riseup.by/resource/images/2019/06/pic1.png
    return (
        <div>
            <div className={s.mainImg}>
                <img
                    src='http://www.sobaka.ru/images/image/01/11/67/15/_normal.jpg'/>
            </div>
            {/*<div className={s.title}>Social Network</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.twitter}</div>
                <ProfileStatusWithHooks status = {props.status}
                updateStatus = {props.updateStatus}/>
            </div>
            </div>

    )
}


export default ProfileInfo;
