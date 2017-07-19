import React from 'react';
import BeerBasicInfo from './BeerBasicInfo';

const Beers = ({ beers }) => {
  const renderBeers = beers.map(beer =>
    <BeerBasicInfo beer={beer}/>
  )

  return (
    <div>
      {renderBeers}
    </div>
  )
}

export default Beers;
