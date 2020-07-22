import dotenv from 'dotenv';
import {
  LOADING_FAILED,
  LOADING_STARTED,
  LOADING_SUCCESSFUL,
  EVACUATOR_REQ,
  SHOW_MODAL,
  ADD_FEEDBACK,
} from './actionTypes';

dotenv.config();

export function addFeedback(feedback) {
  return {
    type: ADD_FEEDBACK,
    rating: feedback.rating,
    comment: feedback.comment,
  };
}

export function showModal(show, props) {
  return {
    type: SHOW_MODAL,
    show,
    props,
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
        // const result = json.features.map((item) => item.properties);
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
