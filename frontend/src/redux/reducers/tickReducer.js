import { SHOW_TICK } from '../actions/actionTypes';

export default (state = { tick: false }, action) => {
  switch (action.type) {
    case SHOW_TICK:
      return {
        ...state,
        tick: !state.tick,
      };
    default:
      return state;
  }
};
