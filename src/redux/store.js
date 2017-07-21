import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import beers from './reducers/beers';

const reducers = combineReducers({
  auth,
  beers
})

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
