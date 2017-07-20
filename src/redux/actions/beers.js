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

export const createBeer = (beer, routerHistory) => {
  return dispatch => {
    return BeerService.createBeer(beer)
      .then(beer => {
        dispatch(appendBeer(beer));
        routerHistory.push('/')
      })
  }
}

const appendBeer = beer => {
  return {
    type: 'SUCCESSFUL_CREATE_BEER',
    payload: beer
  }
}
