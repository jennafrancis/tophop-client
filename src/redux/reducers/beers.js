import uuidV4  from 'uuid/v4';

export default function beers(state = [], action){
  switch(action.type) {
    case 'SUCCESSFUL_BEERS_FETCH':
      return action.beers
    default:
      return state;
  }
}

export function findBeerById(id, beers) {
  return beers.find(function(beer){
    return beer.id === id
  })
}
