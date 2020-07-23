import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import defaultAvatar from '../../images/default-avatar.png';
import styles from './profile.module.scss';
import FotoEditor from '../Foto';
import Favourites from './Favourites';

function Profile() {
  const [uploadFoto, setUploadFoto] = useState(false);
  const [showChosen, setShowChosen] = useState(false);
  const user = useSelector((state) => state.user);
  let loadedFile = user.avatar;
  const { favourites } = user;
  console.log(favourites);
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
          <button onClick={() => setShowChosen(!showChosen)}>Избранное</button>
        </div>
      </div>

      <div className="options"></div>

      {uploadFoto && (
        <FotoEditor userId={user.id} setUploadFoto={setUploadFoto} />
      )}
      {showChosen &&
        favourites.map((service) => <Favourites key={service.id} service={service} userId={user.id} />)}
    </div>
  );
}

export default Profile;
