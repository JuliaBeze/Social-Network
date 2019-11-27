import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/image/user.jpg";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div>
            <span>
                <div className={styles.users}>
                  <NavLink to={'/profile/' + user.id}>
                      <img src={user.photos.small != null ? user.photos.small : userPhoto}
                           className={styles.userPhoto}/>
                  </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);

                        }}>Unfoll
                            w</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}> Follow</button>}

                </div>
            </span>
            <span className={styles.usersName}>
            <div>{user.name}</div>
            <div>{user.status}</div>
                   </span>
            <span className={styles.usersInfo}>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
        </div>
    )
}
export default User;