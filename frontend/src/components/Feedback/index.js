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

  async function sendFeedback(event) {
    event.preventDefault();

    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });
    const result = await response.json();
    console.log(result);

    dispatch(addFeedback(result, feedback.id));
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
            onChange={(e) =>
              setFeedback({ ...feedback, rating: e.target.value })
            }
            name="customized-empty"
            value={Number(feedback.rating)}
            precision={1}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
        </span>
        <div>Комментарии</div>
        <div class="form-group">
          <label for="commentArea"></label>
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
        <div class="form-group">
          <input
            type="file"
            class="form-control-file"
            aria-describedby="fileHelp"
          />
          <small id="fileHelp" class="form-text text-muted">
            Ты можешь загрузить сюда чо по кайфу
          </small>
        </div>
        <button class="btn btn-primary" type="submit">
          Отправить
        </button>
        <button class="btn btn-outline-primary">Отменить</button>
      </form>
    </>
  );
}

export default Feedback;
