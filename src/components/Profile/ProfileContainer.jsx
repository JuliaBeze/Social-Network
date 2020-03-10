import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {deletePost, getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";



class ProfileContainer extends React.Component{



    refreshProfile (){
        //проверям если нет id и мы не авторизованы, знвчит нужно сделать редирект.
        // В противном случае загружаем пользователя с указанной id
        let userId = this.props.match.params.userId;
        if (!userId){
            userId= this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
       this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId)
     this.refreshProfile()
    }

    render() {

        return (
            <div>

                <Profile
                    isOwner={!this.props.match.params.userId}
                    {...this.props}
                    savePhoto={this.props.savePhoto}/>
                updateStatus = {this.props.updateStatus}/>
            </div>
        )
    }
}




let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId:state.auth.userId,
        isAuth: state.auth.isAuth
    }
};


export default compose(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus,savePhoto,saveProfile,deletePost}),
    withRouter,
)(ProfileContainer)

