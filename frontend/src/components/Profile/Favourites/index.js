import React from 'react';
import styles from '../profile.module.scss'

function Favourites({ service, userId }) {
  
  const { address, name, phone, category, workingTime } = service
  console.log(service);
  return (
    <div className={styles.favourites}>
      <strong>{name}</strong>
      <p>{phone}</p>
      <small>{category}</small>
    </div>
  );
}

export default Favourites;
