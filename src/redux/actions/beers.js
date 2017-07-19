import BeerService from '../../services/BeerService'

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

export function appendBeer(beer) {
  return {
    type: 'ADD_BEER',
    payload: beer
  }
}

export const addBeer = (beer) => {
  return dispatch => {
    BeerService.createBeer(beer)
  }
}
