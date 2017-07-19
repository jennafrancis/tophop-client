import React from 'react';
import { Link } from 'react-router-dom'

const Beers = ({ beers }) => {
  const renderBeers = beers.map(beer =>
    <div className="show-beer" key={beer.id}>
      <Link to={`/beers/${beer.id}`}><h3 className="beer-basic">{beer.name}, {beer.brewery}</h3></Link>
      <p><img src={beer.image_url} alt={beer.name} /></p>
    </div>
  );

  return (
    <div>
      {renderBeers}
    </div>
  )
}

export default Beers;
