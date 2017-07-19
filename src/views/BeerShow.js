import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeerDetails from '../components/BeerDetails';

const BeerShow = ({ beer }) =>
  <div className="show-beer" key={beer.id}>
    <h3 className="beer-name">{beer.name}, {beer.brewery}</h3>
    <p><img src={beer.image_url} alt={beer.name} /></p>
    <p>{beer.style}</p>
    <p>IBU: {beer.ibu} | ABV: {beer.abv}% </p>
    <p>{beer.description}</p>
  </div>

const mapStateToProps = (state, ownProps) => {
  const beer = state.beers.find(beer => beer.id == ownProps.match.params.beerId)
  if (beer) {
    return { beer }
  } else {
    return { beer: {} }
  }
}

export default connect(mapStateToProps)(BeerShow);
