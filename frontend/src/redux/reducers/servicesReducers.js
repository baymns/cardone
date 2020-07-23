import {
  LOADING_FAILED,
  LOADING_STARTED,
  LOADING_SUCCESSFUL,
  SORT_BY_DISTANCE,
  SORT_BY_RATING,
  SORT_BY_REVIEW,
} from '../actions/actionTypes';
const initialState = { loading: false, data: null, error: false, sort: null };
export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_STARTED:
      return {
        ...state,
        loading: true,
      };
    case LOADING_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOADING_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    case SORT_BY_DISTANCE:
      return {
        ...state,
        sort: 'distance'
      };
    case SORT_BY_RATING:
      return {
        ...state,
        sort: 'rating'
      }
    case SORT_BY_REVIEW:
      return {
        ...state,
        sort: 'review'
      }
    default:
      return state;
  }
};
