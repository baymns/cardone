import React from 'react';
import styles from './favour.module.scss'

function Favourites({ service, userId }) {
  
  const { address, name, phone, category, workingTime } = service
  console.log(service);
  return (
    <div className={styles.favourites}>
      <p><strong>{name}</strong></p>
      <small>{category}</small>
      <p><i className="fas fa-phone-square"></i> {phone}</p>
    </div>
  );
}

export default Favourites;
