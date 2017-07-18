import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import beerReducer from './beers'

const reducers = combineReducers({
  form,
  beers: beersReducer,
})
