import React from 'react';
import styles from './showFeedback.module.scss';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function ShowFeedback(review) {
  return (
    <>
      <div className={styles.container}>
        <strong>{review.review.userId.name}</strong>
        <div>{review.review.comment}</div>
        <Rating
          name="customized-empty"
          value={Number(review.review.rating)}
          disabled
          precision={0.1}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
        <div>{review.review.createdAt}</div>
      </div>
    </>
  );
}
export default ShowFeedback;
