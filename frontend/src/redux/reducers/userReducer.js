import { AUTH_USER, ADD_FAVOURITES, LOGOUT_USER } from "../actions/actionTypes";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        favourites: action.payload.favourites
      }
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [
          ...state.favourites,
          action.payload
        ]
      }
    case LOGOUT_USER:
      return {}
    default:
      return state;
  }
}
