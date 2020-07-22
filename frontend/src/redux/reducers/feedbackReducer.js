import { ADD_FEEDBACK } from '../actions/actionTypes';

export default (state = { rating, comment }, action) => {
  switch (action.type) {
    case ADD_FEEDBACK:
      return {
        ...state,
        rating: action.rating,
        comment: action.comment,
      };
    default:
      return state;
  }
};
