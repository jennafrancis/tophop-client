import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import { reducer as form } from 'redux-form';
import beers from './modules/Beers/reducer';
import auth from './modules/Auth/reducer';

const beerFormData = ( state = {
  name: '',
  brewery: '',
  ibu: '',
  abv: '',
  description: '',
  image_url: '',
  style: ''
}, action) => {
  return state
}

const currentBeer = ( state = {}, action) => {
  return state
}

const reducers = combineReducers({
  beers,
  currentBeer,
  auth,
  beerFormData
})

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
