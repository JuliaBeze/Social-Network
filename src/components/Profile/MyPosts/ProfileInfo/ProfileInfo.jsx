import React, {useState}from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../assets/image/user.jpg";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile,status,isOwner,updateStatus,savePhoto,saveProfile}) => {


    let [editMode,setEditMode] =  useState(false);


    if (!profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e)=>{
        if (e.target.files.length){
            savePhoto(e.target.files[0])
        }

    };

    const onSubmit = (formData) => {
         saveProfile(formData).then(()=>{
                 setEditMode(false)
         })
    };

    return (
        <div>
            <div className={s.mainImg}>
                <img
                    src='http://www.sobaka.ru/images/image/01/11/67/15/_normal.jpg'/>
            </div>
            {/*<div className={s.title}>Social Network</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainProfileFoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm  initialValues = {profile} profile={profile}  onSubmit = {onSubmit}/>
                    : <ProfileData goToEditMode = {()=>{setEditMode(true)}} profile={profile} isOwner = {isOwner}/>}


                <ProfileStatusWithHooks status = {status}
                updateStatus = {updateStatus}/>
            </div>
            </div>

    )
};

const ProfileData = ({profile,isOwner,goToEditMode}) => {
    return <div>
        <div>
            {isOwner && <div> <button onClick={goToEditMode}> Edit</button></div>}
            <b> Full name </b>: {profile.fullName}
        </div>
        <div>
            <b> Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b> My professional skills </b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b> Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact  key = {key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        <div>
            <b> About me: {profile.aboutMe}</b>
        </div>

    </div>

}

const Contact = ({contactTitle,contactValue})=>{
    return <div className={s.contact}>{contactTitle}: {contactValue}
    </div>

}









export default ProfileInfo;
