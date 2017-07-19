import BeerService from '../../services/BeerService'

export const beerFormData = ( state = {
  name: '',
  brewery: '',
  ibu: '',
  abv: '',
  description: '',
  image_url: '',
  style: ''
}, action)
