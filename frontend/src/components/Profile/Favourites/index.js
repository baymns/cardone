import React from 'react';
import styles from '../profile.module.scss'

function Favourites({ service, userId }) {
  
  const { address, name, phone, category, workingTime } = service
  console.log(service);
  return (
    <div className={styles.favourites}>
      <small>{category}</small>
      <strong>{name}</strong>
      <p>{phone}</p>
    </div>
  );
}

export default Favourites;
