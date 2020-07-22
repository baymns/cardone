import React from 'react';
import styles from './feedback.module.scss';
import Uploader from '../Uploader';
import { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Feedback({ name }) {
  const [feedback, setFeedback] = useState({
    rating: 0,
    comment: '',
  });

  async function sendFeedback(event) {
    event.preventDefault();

    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });
    setFeedback({
      rating: 0,
      comment: '',
    });
  }
  return (
    <>
      <form onSubmit={sendFeedback} className={styles.container}>
        <p>{name}</p>
        <div>Оцените это место</div>
        <span>
          <Rating
            onChange={(e) => setFeedback({ rating: e.target.value })}
            name="customized-empty"
            value={Number(feedback.rating)}
            precision={1}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
        </span>
        <div>Комментарии</div>
        <input
          onChange={(e) => setFeedback({ comment: e.target.value })}
          value={feedback.comment}
          className={styles.comments}
          placeholder="Поделитесь мнением про плюсы и минусы этого места"
        ></input>
        <Uploader />
        <button className={styles.submitButton} type="submit">
          Отправить
        </button>
        <button className={styles.closeButton}>Отменить</button>
      </form>
    </>
  );
}

export default Feedback;
