import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import BeerList from './BeerList';
import Beer from './Beer';

class Home extends Component {
  render() {
    const featured = this.props.beers.filter(beer => beer.featured === true)

    return (
      <div>
          <h2>Featured Brews:</h2>
          <div className="main">
            <BeerList beers={featured} />
            <Route path={`${this.props.match.url}/:beerId`} component={Beer} />
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps)(Home);
