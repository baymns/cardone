import React,{useState} from 'react';
import WayMapProfile from '../../WayMapProfile';
import styles from './favour.module.scss'

function Favourites({ service, userId }) {
  const [way, setWay] = useState(false);
  
  const {
    address,
    name,
    phone,
    category,
    workingTime,
    coordinates,
    id,
  } = service;
  console.log(address);
  return (
    <>
      <div className={styles.favourites}>
        <p>
          <strong>{name}</strong>
        </p>
        <small>{category}</small>
        <p>
          <i className="fas fa-phone-square"></i> {phone}
        </p>
      </div>
      <button onClick={()=>setWay(!way)}>MAP</button>
      {way && <WayMapProfile key={id} coordinates={coordinates.reverse()} address={address}/>}
    </>
  );
}

export default Favourites;
