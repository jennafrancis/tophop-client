const API_URL = process.env.REACT_APP_API_URL;

const BeerService = {
  fetchBeers() {
    return fetch(`${API_URL}/beers`)
      .then(response => response.json())
  },

  createBeer(beer) {
    const request = {
      method: 'POST',
      body: JSON.stringify({
        beer: beer
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }

    return fetch(`${API_URL}/beers`, request)
      .then(response => response.json())
  }
}

export default BeerService;
