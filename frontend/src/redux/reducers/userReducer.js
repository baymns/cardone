import { AUTH_USER, LOGOUT_USER} from "../actions/actionTypes";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        name: action.payload.name,
        id: action.payload.id,
      }
    case LOGOUT_USER: 
    return {}
    default:
      return state;
  }
}
