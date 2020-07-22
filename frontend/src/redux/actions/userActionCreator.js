import { AUTH_USER, ADD_FAVOURITES, DELETE_FAVOURITES, LOGOUT_USER } from "./actionTypes";

export function regUser(user) {
  return {
    type: AUTH_USER,
    payload: user
  }
}
export function addFavourites(favourites) {
  return {
    type: ADD_FAVOURITES,
    payload: favourites,
  }
}
export function deleteFavourites(id) {
  return {
    type: DELETE_FAVOURITES,
    payload: id,
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}

export const addToFavourites = (serviceId, categ, service) => {
  return async (dispatch) => {
    let response;
    try {
      response = await fetch('/api/favourites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: serviceId, categ })
      })

    } catch (error) {
      return error
    }
    if (response.status === 200) {
      dispatch(addFavourites(service))
    } else {
      alert('Something is wrong!')
    }
  }
}

export const deleteFromFavourites = (serviceId) => {
  return async (dispatch) => {
    let response;
    try {
      response = await fetch(`/api/favourites/${serviceId}`, {
        method: 'DELETE'
      })
    } catch (error) {
      return error;
    }
    if (response.status === 200) {
      dispatch(deleteFavourites(serviceId));
    } else {
      alert('Something is wrong!');
    }
  }
}

