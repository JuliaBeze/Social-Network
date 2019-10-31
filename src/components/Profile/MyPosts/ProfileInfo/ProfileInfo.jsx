import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.mainImg}>
                <img
                    src='https://riseup.by/resource/images/2019/06/pic1.png'/>
            </div>
            <div className={s.title}>Social Network</div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.twitter}</div>
                <ProfileStatus status = {props.status}
                updateStatus = {props.updateStatus}/>
            </div>
            </div>

    )
}


export default ProfileInfo;
