import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import defaultAvatar from '../../images/default-avatar.png';
import styles from './profile.module.scss';
import FotoEditor from '../Foto';


function Profile() {
  const [uploadFoto, setUploadFoto] = useState(false);
  const user = useSelector((state) => state.user);
  let loadedFile = user.avatar;
  return (
    <div className={styles.profile_container}>
      <div className={styles.avatar}>
        <img src={loadedFile || defaultAvatar} alt="avatar" />
        <div onClick={() => setUploadFoto(!uploadFoto)}>
          <i className="fas fa-user-plus"></i>
        </div>
      </div>
      <div className="main-user-info">
        <p>{user.name}</p>
        <p>{user.email}</p>
        
      </div>
      <div className="options"></div>

      {uploadFoto && (
        <FotoEditor userId={user.id} setUploadFoto={setUploadFoto} />
      )}
    </div>
  );
}

export default Profile;
