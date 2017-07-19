import BeerService from '../../../services/BeerService'

export function addBeer(beer) {
  return {
    type: 'ADD_BEER',
    payload: beer
  }
}

export const fetchBeers = () => {
  BeerService.fetchBeers()
}
