import React,{useState} from 'react';
import WayMapProfile from '../../WayMapProfile';
import styles from './favour.module.scss'
import { useDispatch } from 'react-redux';
import { deleteFromFavourites } from '../../../redux/actions/userActionCreator';

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
  const dispatch = useDispatch();
  return (
    <>
    <div className={styles.favourites}>
      <div className={styles.favour_content}>
        <p><strong>{name}</strong></p>
        <small>{category}</small>
        <p><i className="fas fa-phone-square"></i> {phone}</p>
      </div>
      <div className={styles.show_more}>
        <div>
          <i className="fas fa-info-circle"></i>
        </div>
        <div onClick={() => dispatch(deleteFromFavourites(id))}><i className="fas fa-trash-alt" ></i></div>
      </div>
    </div >
      <button onClick={()=>setWay(!way)}>MAP</button>
      {way && <WayMapProfile key={id} coordinates={coordinates.reverse()} address={address}/>}

  </>
  );
}

export default Favourites;
