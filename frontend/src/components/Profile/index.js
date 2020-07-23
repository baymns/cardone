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
        <img
          src={loadedFile || defaultAvatar}
          alt="avatar"
          onClick={() => setUploadFoto(!uploadFoto)}
        />
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
      
      <div className="options"></div>

      {uploadFoto && (
        <FotoEditor userId={user.id} setUploadFoto={setUploadFoto} />
      )}
    </div>
  );
}

export default Profile;
