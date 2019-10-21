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
            <div>
                <img
                    src='https://wallpapershome.ru/images/wallpapers/s-visoti-ptichego-poleta-1280x720-gorod-4k-5k-iphone-oboi-13494.jpg'/>
            </div>
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
