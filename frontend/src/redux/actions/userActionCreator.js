import { AUTH_USER, LOGOUT_USER } from "./actionTypes";

export function regUser(user) {
  return {
    type: AUTH_USER,
    payload: user
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}
