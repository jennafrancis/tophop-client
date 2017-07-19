import BeerService from '../../services/BeerService'

export function addBeer(beer) {
  return {
    type: 'ADD_BEER',
    payload: beer
  }
}

const appendBeers = beers => {
  return {
    type: 'SUCCESSFUL_BEERS_FETCH',
    beers: beers
  }
}

export const fetchBeers = () => {
  return dispatch => {
    BeerService.fetchBeers()
    .then(beers => {
      dispatch(appendBeers(beers))
    })
  }
}
