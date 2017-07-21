import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BeerLove from './BeerLove'

class BeerList extends Component {
  render() {
    const renderBeers = this.props.beers.map(beer =>
      <BeerLove beer={beer} count='5' />
    );

    return (
      <div>
        {renderBeers}
      </div>
    )
  }
}

export default BeerList;
