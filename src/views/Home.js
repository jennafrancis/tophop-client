import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Beers from '../components/Beers';
import BeerShow from './BeerShow';

const Home = ({ beers }) =>
  <div className="main">
    <Beers beers={beers} />
    <Route path={`beers/:beerId`} component={BeerShow} />
    <Route exact path='/beers' render={() => (
      <h3>Please select a beer from the list.</h3>
    )} />
  </div>

const mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps)(Home);
