import {
  LOADING_FAILED,
  LOADING_STARTED,
  LOADING_SUCCESSFUL,
} from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LOADING_FAILED:
      return {
        ...state,
        data: action.payload,
      };
    case LOADING_STARTED:
      return {
        ...state,
      };
    case LOADING_SUCCESSFUL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
