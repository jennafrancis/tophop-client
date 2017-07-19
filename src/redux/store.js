import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import auth from './reducers/auth';
import beerFormData from './reducers/beerFormData';
import beers from './reducers/beers';

const reducers = combineReducers({
  auth,
  beerFormData,
  beers,
  form
})

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
