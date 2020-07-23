import React from 'react';
import Map from '../Map';
import styles from './service.module.scss';
import { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showModal } from '../../redux/actions/actionCreators';
import {
  addToFavourites,
  deleteFromFavourites,
} from '../../redux/actions/userActionCreator';

function Service({ categ, service }) {
  const user = useSelector((state) => state.user);
  const feedback = useSelector((state) => state.feedback)
  const dispatch = useDispatch();
  const {
    id,
    name,
    address,
    workingTime,
    phone,
    url,
    category,
    coordinates,
    totalRating,
    distance,
    reviews,
  } = service;

  //Hooks
  const [visibility, setVisibility] = useState(false);

  return (

    <div className={styles.service_block}>
      <p className={styles.name}>
        <strong>{name}</strong>
      </p>
      <p>
        <span>Адрес: {address}</span>
      </p>
      <p>Расстояние: {distance}км</p>
      <p>
        Рейтинг:
          <Rating
          name="customized-empty"
          value={Number(totalRating)}
          disabled
          precision={0.1}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />{' '}
        <strong>{totalRating}</strong>
      </p>
      <p>
        {reviews.length > 0 ? (
          <span>Отзывы: {reviews.length}</span>
        ) : (
            <span>Отзывов пока нет.</span>
          )}
        {user.id ? (
          <button
            className={styles.review_button}
            type="button"
            onClick={() =>
              dispatch(
                showModal('feedback', {
                  name,
                  id,
                }),
              )
            }
          >
            Написать отзыв
          </button>
        ) : (
            <Link to="/signin">
              <button className={styles.review_button} type="button">
                Написать отзыв
            </button>
            </Link>
          )}
      </p>
      <p>
        <i className="far fa-clock"></i> {workingTime}
      </p>
      <p>
        <i className="fas fa-phone-square"></i> {phone}
      </p>
      <p>
        {url && (
          <>
            <i className="fas fa-globe"></i> <a href={url}>{url}</a>
          </>
        )}
      </p>
      <div className={styles.service_btns}>
        {visibility ?

          <button
            type="button"
            className={styles.show_map_btn}
            onClick={() => setVisibility(!visibility)}
          >
            <i className="fas fa-location-arrow"></i> Скрыть
      </button> :
          <button
            type="button"
            className={styles.show_map_btn}
            onClick={() => setVisibility(!visibility)}
          >
            <i className="fas fa-location-arrow"></i> Маршрут
      </button>

        }
        {

          user.favourites && user.favourites.find((serv) => serv.id === id)
            ? (<button
              key="removeFavorites"
              type="button"
              className={styles.favor_btn}
              onClick={() => dispatch(deleteFromFavourites(id))}
            ><i className="fas fa-heart-broken"></i> Убрать из Избранного</button>) :
            user.id ?
              (<button
                key="addFavorites"
                type="button"
                className={styles.favor_btn}
                onClick={() => dispatch(addToFavourites(id, categ, service))}
              ><i className="fas fa-heart"></i> Добавить в Избранное</button>) : <></>
        }
      </div>

      {visibility && (
        <Map description={address} boundedBy={coordinates} id={id} />
      )}
    </div>
  );
}

export default Service;
