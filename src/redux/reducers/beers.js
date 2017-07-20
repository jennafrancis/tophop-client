// import uuidV4 from 'uuid/v4';

export default function beers(state = [], action){
  switch(action.type) {
    case 'SUCCESSFUL_BEERS_FETCH':
      return action.beers
    case 'SUCCESSFUL_CREATE_BEER':
      let beer = Object.assign({}, action.payload)
      return state.concat(beer)
    default:
      return state;
  }
}
