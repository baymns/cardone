import React from 'react';
import styles from './showFeedback.module.scss';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function ShowFeedback({ review }) {
  const time = new Date(review.createdAt).toLocaleString().slice(0, 17);
  return (
    <>
      <div className={styles.container}>
        <p>
          <strong>{review.userId.name}</strong>
        </p>
        <Rating
          name="customized-empty"
          value={Number(review.rating)}
          disabled
          precision={0.1}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
        <div>{review.comment}</div>
        <div className={styles.time_block}>{time}</div>
      </div>
    </>
  );
}
export default ShowFeedback;
