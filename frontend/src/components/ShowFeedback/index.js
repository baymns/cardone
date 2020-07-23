import React from 'react';
import styles from './showFeedback.module.scss';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function ShowFeedback(id) {
  return (
    <>
      <div>{comment}</div>
      <Rating
        name="customized-empty"
        value={Number(rating)}
        disabled
        precision={0.1}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
      <div>{username}</div>
      <div>{createdAt}</div>
    </>
  );
}
