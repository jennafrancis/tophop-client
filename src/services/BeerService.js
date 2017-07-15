const API_URL = process.env.REACT_APP_API_URL;

const BeerService ={
  fetchBeers() {
    return fetch(`${API_URL}/beers`)
      .then(response => response.json())
  }
}

export default BeerService;
