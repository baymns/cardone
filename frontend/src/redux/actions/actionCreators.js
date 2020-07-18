import dotenv from 'dotenv';
import {
  LOADING_FAILED,
  LOADING_STARTED,
  LOADING_SUCCESSFUL,
  EVACUATOR_REQ,
} from './actionTypes';

dotenv.config();

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

export function load() {
  return async (dispatch) => {
    dispatch(loadingStarted());
    try {
      const response = await fetch(
        encodeURI(
          `https://search-maps.yandex.ru/v1/?apikey=${process.env.REACT_APP_API_KEY_SEARCH_COMPANY}&text=аптека&type=biz&lang=ru_RU&ll=37.618920,55.756994&spn=0.552069,0.400552`,
        ),
      );
      const json = await response.json();
      const result = json.features.map((item) => item.properties);
      console.log(result);
      dispatch(loadingSuccessful(result));
    } catch (err) {
      dispatch(loadingFailed(err));
    }
  };
}
