import {
  AUTH_USER,
  ADD_FAVOURITES,
  DELETE_FAVOURITES,
  LOGOUT_USER,
  UPLOAD_USER_AVATAR,
} from '../actions/actionTypes';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        favourites: action.payload.favourites,
        avatar: action.payload.avatar,
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case DELETE_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(
          (service) => service.id !== action.payload,
        ),
      };
    case LOGOUT_USER:
      return {};
    case UPLOAD_USER_AVATAR:
      return {
        ...state,
        avatar:action.payload
      }
    default:
      return state;
  }
}
