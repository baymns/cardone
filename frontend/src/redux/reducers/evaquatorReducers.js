import { EVACUATOR_REQ } from '../actions/actionTypes';

export default (state = { reqData: [] }, action) => {
  switch (action.type) {
    case EVACUATOR_REQ:
      return {
        ...state,
        reqData: [...state.reqData, action.reqData],
      };
    default:
      return state;
  }
};
