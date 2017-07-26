import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import BeerList from './BeerList';
import Beer from './Beer';

const AllBeers = ({ match, beers }) =>
  <div>
    <h2>All Brews:</h2>
    <div className="main">
      <BeerList beers={beers} />
      <Route path={`${match.url}/:beerId`} component={Beer} />
    </div>
  </div>

const mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps)(AllBeers);
