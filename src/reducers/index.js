import { combineReducers } from 'redux';
import beerReducer from './beers'

export default combineReducers({
  beers: beersReducer,
})
