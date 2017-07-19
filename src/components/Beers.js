import React from 'react';
import Beer from './Beer';

const Beers = ({ beers }) => {
  const renderBeers = beers.map(beer =>
    <Beer beer={beer}/>
  )

  return (
    <div>
      {renderBeers}
    </div>
  )
}

export default Beers;
