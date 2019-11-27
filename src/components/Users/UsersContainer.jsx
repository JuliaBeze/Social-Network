import React from 'react';
import {
    follow,
    setCurrentPage,
    unfollow,
    requestUsers
} from "../../redux/users_reducer"
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users_selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        let{currentPage,pageSize}=this.props;
        this.props.getUsers(currentPage,pageSize);
    }

    onPageChanged = (pageNumber) => {
        let{pageSize}=this.props;
        this.props.getUsers(pageNumber,pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}


let mapStateToProps = (state) => {
    //передаем селекторы
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: requestUsers}),
)(UsersContainer)
