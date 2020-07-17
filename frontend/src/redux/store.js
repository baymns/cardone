import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import servicesReducers from './reducers/servicesReducers';

const storageState = window.localStorage.getItem('state');

const initialState = storageState ? JSON.parse(storageState) : undefined;

const store = createStore(
  combineReducers({
    services: servicesReducers,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
});

export default store;
