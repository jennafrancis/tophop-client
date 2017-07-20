import BeerService from '../../services/BeerService'

export const fetchBeers = () => {
  return dispatch => {
    BeerService.fetchBeers()
      .then(beers => {
        dispatch(appendBeers(beers))
      })
  }
}

const appendBeers = beers => {
  return {
    type: 'SUCCESSFUL_BEERS_FETCH',
    beers: beers
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

export const deleteBeer = (beer, routerHistory) => {
  return dispatch => {
    return BeerService.deleteBeer(beer)
      .then(beer => {
        dispatch(destroyBeer(beer));
        routerHistory.push('/')
      })
  }
}

const destroyBeer = beer => {
  return {
    type: 'SUCESSFUL_DELETE_BEER',
    id: beer.id
  }
}
