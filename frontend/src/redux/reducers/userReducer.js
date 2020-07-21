import { AUTH_USER, LOGOUT_USER} from "../actions/actionTypes";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email
      }
    case LOGOUT_USER: 
    return {}
    default:
      return state;
  }
}
