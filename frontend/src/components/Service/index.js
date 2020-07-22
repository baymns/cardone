import React from 'react';
import Map from '../Map';
import styles from './service.module.scss';
import { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showModal } from '../../redux/actions/actionCreators';
import { addToFavourites, deleteFromFavourites } from '../../redux/actions/userActionCreator';

function Service({ categ, service }) {
  const user = useSelector((state) => state.user);
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
    distance,
    rating,
    reviews,
  } = service;

  //Hooks
  const [visibility, setVisibility] = useState(false);

  return (
    <div className={styles.service_block}>
      <p>
        <strong>{name}</strong>
      </p>
      <p>
        <span>Адрес: {address}</span>
      </p>
      <p>Расстояние: {distance}км</p>
      <p>
        Рейтинг:
        <span>
          <Rating
            name="customized-empty"
            defaultValue={4}
            precision={1}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
        </span>
      </p>
      <p>
        {reviews.length > 0 ? (
          <span>Отзывы: {reviews.length}</span>
        ) : (
          <span>Отзывов пока нет.</span>
        )}
        {user.id ? (
          <button
            className="review_button"
            type="button"
            onClick={() =>
              dispatch(
                showModal('feedback', {
                  name: name,
                }),
              )
            }
          >
            Написать отзыв
          </button>
        ) : (
          <Link to="/signin">
            <button className="review_button" type="button">
              Написать отзыв
            </button>
          </Link>
        )}
      </p>
      <p>
        <i class="far fa-clock"></i> {workingTime}
      </p>
      <p>
        <i class="fas fa-phone-square"></i> {phone}
      </p>
      <p>
        {url && (
          <>
            <i class="fas fa-globe"></i> <a href={url}>{url}</a>
          </>
        )}
      </p>
      <button
        type="button"
        className={styles.show_map_btn}
        onClick={() => setVisibility(!visibility)}
      >
        <i class="fas fa-location-arrow"></i> Маршрут
      </button>
      {

        user.favourites && user.favourites.find((serv) => serv.id === id)
          ? (<button
            type="button"
            className={styles.show_map_btn}
            onClick={() => dispatch(deleteFromFavourites(id))}
          ><i class="fas fa-heart-broken"></i> Убрать из Избранного</button>)
          : (<button
            type="button"
            className={styles.show_map_btn}
            onClick={() => dispatch(addToFavourites(id, categ, service))}
          ><i class="fas fa-heart"></i> Добавить в Избранное</button>)
      }

      {visibility && (
        <Map description={address} boundedBy={coordinates} id={id} />
      )}
    </div>
  );
}

export default Service;
