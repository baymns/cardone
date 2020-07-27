import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import defaultAvatar from '../../images/default-avatar.png';
import styles from './profile.module.scss';
import FotoEditor from '../Foto';
import Favourites from './Favourites';

function Profile() {
  const [uploadFoto, setUploadFoto] = useState(false);
  const user = useSelector((state) => state.user);
  let loadedFile = user.avatar;
  const { favourites } = user;
  return (
    <div className={styles.profile_container}>
      <div className={styles.avatar}>
        <img
          src={loadedFile || defaultAvatar}
          alt="avatar"
          onClick={() => setUploadFoto(!uploadFoto)}
        />
        <div className={styles.user_info}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>

      </div>
      {
        uploadFoto && (
          <FotoEditor userId={user.id} setUploadFoto={setUploadFoto} />
        )
      }
      <div className={styles.gray_bg}></div>
      <div className={styles.favour_block}>
        <div className={styles.favour_btn}>
          <i className="fas fa-bookmark" /> <button>Избранное</button>
        </div>
        <div className={styles.favour_list}>
          {
            favourites &&
            favourites.map((service) => <Favourites key={service.id} service={service} userId={user.id} />)
          }
        </div>
      </div>

      

    </div >
  );
}

export default Profile;
