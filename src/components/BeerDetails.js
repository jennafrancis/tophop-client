import React from 'react';

const BeerDetails = ({ beer }) => {
  return (
    <div className="show-beer" key={beer.id}>
      <h3 className="beer-name">{beer.name}, {beer.brewery}</h3>
      <p><img src={beer.image_url} alt={beer.name} /></p>
      <p>{beer.style}</p>
      <p>IBU: {beer.ibu} | ABV: {beer.abv}% </p>
      <p>{beer.description}</p>
    </div>
  )
}

export default BeerDetails;
