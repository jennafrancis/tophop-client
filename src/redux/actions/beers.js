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

const appendBeer = beer => {
  return {
    type: 'SUCCESSFUL_CREATE_BEER',
    payload: beer
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

const destroyBeer = id => {
  return {
    type: 'SUCESSFUL_DELETE_BEER',
    id: id
  }
}

export const deleteBeer = (beer, routerHistory) => {
  const id = beer.id
  return dispatch => {
    return BeerService.deleteBeer(beer)
      .then(beer => {
        dispatch(destroyBeer(id))
        routerHistory.push('/');
      })
  }
}
