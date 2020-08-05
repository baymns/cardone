import React from 'react';
import { useSelector } from 'react-redux';
import styles from './showFeedbackList.module.scss';
import ShowFeedback from '../ShowFeedback';

function ShowFeedbackList({ name, id }) {
  const data = useSelector((state) => state.services.data);
  const service = data.find((ser) => ser.id === id);

  return (
    <>
      <div className={styles.container}>
        <strong>{name}</strong>
        <div>{service.category}</div>
        {service &&
          service.reviews.map((review) => (
            <ShowFeedback key={review._id} review={review} />
          ))}
      </div>
    </>
  );
}

export default ShowFeedbackList;
