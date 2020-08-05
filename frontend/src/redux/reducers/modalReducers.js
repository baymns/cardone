import { SHOW_MODAL } from '../actions/actionTypes';

export default (state = { modal: false }, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: !state.modal,
        show: action.show,
        props: action.props
      };
    default:
      return state;
  }
};
