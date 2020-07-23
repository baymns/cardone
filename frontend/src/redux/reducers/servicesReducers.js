import {
  LOADING_FAILED,
  LOADING_STARTED,
  LOADING_SUCCESSFUL,
  ADD_FEEDBACK,
} from '../actions/actionTypes';
const initialState = { loading: false, data: null, error: false };
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEEDBACK:
      return {
        ...state,
        data: state.data.map((el) => {
          if (el.id === action.id) {
            el.reviews = [...el.reviews, action.feedback];
          }
          return el;
        }),
      };
    case LOADING_STARTED:
      return {
        ...state,
        loading: true,
        error: false,
        data: null,
      };
    case LOADING_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case LOADING_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};
