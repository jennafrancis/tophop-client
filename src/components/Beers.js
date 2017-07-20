import React from 'react';
import { Link } from 'react-router-dom'

const Beers = ({ beers }) => {
  const renderBeers = beers.map(beer =>
    <div className="beer-list" key={beer.id}>
      <Link to={`/beers/${beer.id}`} className="beer-basic"><h3 >{beer.name}, {beer.brewery}</h3></Link>
      <p><img className="home-img" src={beer.image_url} alt={beer.name} /></p>
    </div>
  );

  return (
    <div>
      {renderBeers}
    </div>
  )
}

export default Beers;
