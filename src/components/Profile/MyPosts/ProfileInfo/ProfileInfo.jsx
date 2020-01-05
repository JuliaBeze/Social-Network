import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../assets/image/user.jpg";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }


    const onMainPhotoSelected = (e)=>{
        if (e.target.files.length){
            props.savePhoto(e.target.files[0])
        }

    };

    return (
        <div>
            <div className={s.mainImg}>
                <img
                    src='http://www.sobaka.ru/images/image/01/11/67/15/_normal.jpg'/>
            </div>
            {/*<div className={s.title}>Social Network</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto } className={s.mainProfileFoto}/>
                {props.isOwner && <input type={"file"} onChange = {onMainPhotoSelected}/>}
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
