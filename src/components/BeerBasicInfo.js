import React from 'react';
import { Link } from 'react-router-dom'

const BeerBasicInfo = ({ beer }) => {
  return (
    <div className="show-beer" key={beer.id}>
      <Link to="/beers/slug"><h3 className="beer-basic">{beer.name}, {beer.brewery}</h3></Link>
      <p><img src={beer.image_url} alt={beer.name} /></p>
    </div>
  )
}

export default BeerBasicInfo;
