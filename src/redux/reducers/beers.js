export default function beers(state = [], action){
  switch(action.type) {
    case 'SUCCESSFUL_BEERS_FETCH':
      return action.beers
    case 'SUCCESSFUL_CREATE_BEER':
      let beer = Object.assign({}, action.payload)
      return state.concat(beer)
    case 'SUCESSFUL_DELETE_BEER':
      return state.filter(beer => beer.id !== action.id)
    default:
      return state;
  }
}
