import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props) => {


    return (
        <div>
            <ProfileInfo profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            <MyPostsContainer  profile = {props.profile} />
        </div>
    )
}


// Profile.propTypes = {
//     addPost: PropTypes.func
// };


export default Profile;
