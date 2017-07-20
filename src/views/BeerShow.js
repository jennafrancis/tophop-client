import React, { Component } from 'react';
import { connect } from 'react-redux';

const BeerShow = ({ beer }) =>
  <div className="show-beer" key={beer.id}>
    <h2>{beer.name}, {beer.brewery}</h2>
    <p><img src={beer.image_url} alt={beer.name} /></p>
    <h3>{beer.style}</h3>
    <h4>ABV: {beer.abv}% | IBU: {beer.ibu}</h4>
    <p className="description">{beer.description}</p>
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
