import React from 'react';

const BeerBasicInfo = ({ beer }) => {
  return (
    <div className="show-beer" key={beer.id}>
      <h3 className="beer-basic">{beer.name}, {beer.brewery}</h3>
      <p><img src={beer.image_url} alt={beer.name} /></p>
    </div>
  )
}

export default BeerBasicInfo;
