import React from 'react';

const Beers = ({ beers }) => {
  const renderBeers = beers.map(beer =>
    <div>
      <h3 key={beer.id}>{beer.name}, {beer.brewery}</h3>
      <p>image url</p>
      <p>style</p>
      <p>IBU: something | ABV: something else </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )

  return (
    <div>
      {renderBeers}
    </div>
  )
}

export default Beers;
