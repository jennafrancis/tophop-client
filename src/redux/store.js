import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import auth from './reducers/auth';
import beerFormData from './reducers/beerFormData';
import beers from './reducers/beers';
import currentBeer from './reducers/currentBeer';

const reducers = combineReducers({
  form,
  auth,
  beerFormData,
  beers,
  currentBeer
})

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
