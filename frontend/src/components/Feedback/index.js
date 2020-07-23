import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './feedback.module.scss';
import { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { addFeedback } from '../../redux/actions/actionCreators';

function Feedback({ name, id }) {
  const user = useSelector((state) => state.user);
  const [feedback, setFeedback] = useState({
    rating: 0,
    comment: '',
    id: id,
    userId: user.id,
  });

  const dispatch = useDispatch();

  async function sendFeedback(event, id) {
    event.preventDefault();

    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });
    dispatch(addFeedback(feedback));
    setFeedback({
      rating: 0,
      comment: '',
    });
  }

  return (
    <>
      <form onSubmit={sendFeedback} className={styles.container}>
        <p className={styles.name}>{name}</p>
        <p>Оцените это место</p>
        <span>
          <Rating
            onChange={(e) =>
              setFeedback({ ...feedback, rating: e.target.value })
            }
            name="customized-empty"
            value={Number(feedback.rating)}
            precision={1}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
        </span>
        <p className={styles.comment_label}>Комментарий</p>
        <div className="form-group">
          <label htmlFor="commentArea"></label>
          <textarea
            onChange={(e) =>
              setFeedback({ ...feedback, comment: e.target.value })
            }
            value={feedback.comment}
            className={styles.comments}
            placeholder="Поделитесь мнением про плюсы и минусы этого места"
            id="commentArea"
            rows="3"
          ></textarea>
        </div>
        <div className={styles.upload_block}>
          <label htmlFor="file-upload">
            <i className="fas fa-upload"></i>
            <span className={styles.title}>Загрузить файл</span>
            <input
              type="file"
              // className={styles.loadfile_btn}
              aria-describedby="fileHelp"
              id="file-upload"
            />
          </label>
        </div>
        <div>
          <button className={styles.send_btn} type="submit">
            Отправить
        </button>
          <button className={styles.cancel_btn}>Отменить</button>
        </div>
      </form>
    </>
  );
}

export default Feedback;
