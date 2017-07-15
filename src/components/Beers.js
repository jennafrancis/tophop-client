import React from 'react';

const Beers = ({ beers }) => {
  const renderBeers = beers.map(beer =>
    <div key={beer.id}>
      <h3>{beer.name}, {beer.brewery}</h3>
      <p><img src={beer.image_url} alt={beer.name}></img></p>
      <p>{beer.style}</p>
      <p>IBU: {beer.ibu} | ABV: {beer.abv}% </p>
      <p>{beer.description}</p>
    </div>
  )

  return (
    <div>
      {renderBeers}
    </div>
  )
}

export default Beers;
