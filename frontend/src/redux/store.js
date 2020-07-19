import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import servicesReducers from './reducers/servicesReducers';
import userReducer from './reducers/userReducer';
import modalReducers from './reducers/modalReducers';

const storageState = window.localStorage.getItem('state');

const initialState = storageState ? JSON.parse(storageState) : undefined;

const store = createStore(
  combineReducers({
    user: userReducer,
    services: servicesReducers,
    modal: modalReducers,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
});

export default store;
