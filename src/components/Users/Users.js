import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/image/user.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.usersPage}>
            {pages.map((p, index) => {
                return <span key={index}
                             className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }}>{p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div className={styles.users}>
                  <NavLink to={'/profile/' + u.id}>
                      <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                  </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress
                            .some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id);

                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }}> Follow</button>}

                </div>
            </span>
                <span className={styles.usersName}>
            <div>{u.name}</div>
            <div>{u.status}</div>
                   </span>
                <span className={styles.usersInfo}>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
            </div>
           )}
    </div>
}
export default Users;