import React from 'react';

const BeerDetails = ({ beer }) => {
  return (
    <div className="show-beer" key={beer.id}>
      <h1>{beer.name}, {beer.brewery}</h1>
      <p><img src={beer.image_url} alt={beer.name} /></p>
      <p>{beer.style}</p>
      <p>IBU: {beer.ibu} | ABV: {beer.abv}% </p>
      <p className="description">{beer.description}</p>
    </div>
  )
}

export default BeerDetails;
