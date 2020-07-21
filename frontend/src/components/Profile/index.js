import React from 'react';
import { useSelector } from 'react-redux';
import defaultAvatar from '../../images/default-avatar.png'
import styles from './profile.module.scss';

function Profile() {
  const user = useSelector(state => state.user)
  let loadedFile = user.avatar;
  return (
    <div className={styles.profile_container}>
      <div className={styles.avatar}>
        <img src={loadedFile || defaultAvatar} alt=""/>
      </div>
      <div className="main-user-info">
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
      <div className="options"></div>
    </div>
  );
}

export default Profile;
