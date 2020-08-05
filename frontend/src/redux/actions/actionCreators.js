import dotenv from 'dotenv';
import {
  LOADING_FAILED,
  LOADING_STARTED,
  LOADING_SUCCESSFUL,
  SORT_BY_DISTANCE,
  SORT_BY_RATING,
  SORT_BY_REVIEW,
  EVACUATOR_REQ,
  SHOW_MODAL,
  SHOW_TICK,
  ADD_FEEDBACK,
  RECALCULATE_RATING,
} from './actionTypes';

dotenv.config();

export function addFeedback(feedback, id) {
  return {
    type: ADD_FEEDBACK,
    feedback,
    id,
  };
}
export function recalculateRating(id) {
  return {
    type: RECALCULATE_RATING,
    id,
  };
}
export function showModal(show, props) {
  return {
    type: SHOW_MODAL,
    show,
    props,
  };
}

export function showTick() {
  return {
    type: SHOW_TICK,
  };
}

export function addEvacuatorReq(reqData) {
  return {
    type: EVACUATOR_REQ,
    payload: reqData,
  };
}

export function loadingStarted() {
  return {
    type: LOADING_STARTED,
  };
}

export function loadingSuccessful(category) {
  return {
    type: LOADING_SUCCESSFUL,
    payload: category,
  };
}

export function loadingFailed(err) {
  return {
    type: LOADING_FAILED,
    payload: err,
    error: true,
  };
}

export function sortDistance() {
  return {
    type: SORT_BY_DISTANCE,
  };
}
export function sortRating() {
  return {
    type: SORT_BY_RATING,
  };
}
export function sortReview() {
  return {
    type: SORT_BY_REVIEW,
  };
}

export function load(category) {
  return async (dispatch) => {
    dispatch(loadingStarted());
    try {
      async function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const response = await fetch('/api/services', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ latitude, longitude, category }),
        });
        const json = await response.json();
        dispatch(loadingSuccessful(json));
      }

      function error() {
        console.log('err');
      }

      if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
      } else {
        navigator.geolocation.getCurrentPosition(success, error);
      }
    } catch (err) {
      dispatch(loadingFailed(err));
    }
  };
}

export function sendFeedback(event, feedback) {
  event.preventDefault();
  return async (dispatch) => {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });
    const result = await response.json();
    dispatch(addFeedback(result, feedback.id));
    dispatch(recalculateRating(feedback.id));
    
  }
}
