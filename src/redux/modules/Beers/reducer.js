import uuidV4  from 'uuid/v4';

export default function beers(state = [], action){
  switch(action.type) {
    case 'ADD_BEER':
      let beer = Object.assign({}, action.payload, { id: uuidV4() })
      return state.concat(beer)
    case 'FETCH_BEERS':
      return [
        { name: "Puff", brewery: "sixpoint" }
      ]
    default:
      return state;
  }
}

export function findBeerById(id, beers) {
  return beers.find(function(beer){
    return beer.id === id
  })
}
