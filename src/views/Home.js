import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Beers from '../components/Beers';
import BeerShow from './BeerShow';

const Home = ({ match, beers }) =>
  <div className="main">
    <Beers beers={beers} />
    <Route path={`${match.url}/:beerId`} component={BeerShow} />
  </div>

const mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps)(Home);
