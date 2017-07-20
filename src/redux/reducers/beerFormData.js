import uuidV4  from 'uuid/v4';

export default (state = {
  name: '',
  brewery: '',
  ibu: '',
  abv: '',
  description: '',
  image_url: '',
  style: ''
}, action) => {
  switch(action.type) {
    case 'ADD_BEER':
      let beer = Object.assign({}, action.payload, { id: uuidV4() })
      return state.concat(beer)
    default:
      return state;
  }
}
