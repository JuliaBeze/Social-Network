import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from 'prop-types';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
            <NewPostTextRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
            </div>
        </div>
    )
};


const NewPostText = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component = {Textarea} placeholder = "Post message" name = "newPostText"
                       validate={[required, maxLength10]}/>
            </div>
            <div><button>Add post</button></div>
        </form>
    )
};

const NewPostTextRedux =  reduxForm({form: "addNewPostText"})(NewPostText)


MyPosts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            likesCount: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};

export default MyPosts;
