import React from 'react';
import PropTypes from 'prop-types';
import {onAddPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost:(newPostText)=>{
            dispatch(onAddPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps)(MyPosts);

MyPostsContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            likesCount: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};
export default MyPostsContainer;
