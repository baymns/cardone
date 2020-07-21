import dotenv from 'dotenv';
import {
  LOADING_FAILED,
  LOADING_STARTED,
  LOADING_SUCCESSFUL,
  EVACUATOR_REQ,
  SHOW_MODAL,
} from './actionTypes';

dotenv.config();

export function showModal(show) {
  return {
    type: SHOW_MODAL,
    show,
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

export function load(service) {
  return async (dispatch) => {
    dispatch(loadingStarted());
    try {
      async function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await fetch(
          encodeURI(
            `https://search-maps.yandex.ru/v1/?apikey=${process.env.REACT_APP_API_KEY_SEARCH_COMPANY}&text=${service}&type=biz&lang=ru_RU&ll=${longitude},${latitude}&spn=0.052069,0.050552`,
          ),
        );
        const json = await response.json();
        const result = json.features.map((item) => item.properties);
        console.log(result);
        dispatch(loadingSuccessful(result));
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
