import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props) => {


    return (
        <div>
            <ProfileInfo
                saveProfile = {props.saveProfile}
                savePhoto = {props.savePhoto}
                isOwner = {props.isOwner}
                profile = {props.profile}
                status = {props.status}
                updateStatus = {props.updateStatus}/>
            <MyPostsContainer  profile = {props.profile} />
        </div>
    )
}



export default Profile;
