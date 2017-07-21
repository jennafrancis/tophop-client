import React from 'react';
import { Link } from 'react-router-dom'

const BeerList = ({ beers }) => {
  const renderBeers = beers.map(beer =>
    <div className="beer-list" key={beer.id}>
      <Link to={`/beers/${beer.id}`} className="beer-basic"><h4 >{beer.name}, {beer.brewery}</h4></Link>
      <p><img className="home-img" src={beer.image_url} alt={beer.name} /></p>
    </div>
  );

  return (
    <div>
      {renderBeers}
    </div>
  )
}

export default BeerList;
