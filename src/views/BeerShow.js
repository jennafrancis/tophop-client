import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBeer } from '../redux/actions/beers'

class BeerShow extends Component {
  handleOnDelete = () => {
    this.props.deleteBeer(this.props.beer, this.props.history)
  }

  render() {
    return (
      <div className="show-beer" key={this.props.beer.id}>
        <h2>{this.props.beer.name}, {this.props.beer.brewery}</h2>
        <p><img className="show-img" src={this.props.beer.image_url} alt={this.props.beer.name} /></p>
        <h3>{this.props.beer.style}</h3>
        <h4>ABV: {this.props.beer.abv}% | IBU: {this.props.beer.ibu}</h4>
        <p className="description">{this.props.beer.description}</p>
        {this.props.isAuthenticated &&
          <button onClick={this.handleOnDelete}>Delete Beer</button>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const beer = state.beers.find(beer => beer.id == ownProps.match.params.beerId)
  if (beer) {
    return { beer, isAuthenticated: state.auth.isAuthenticated }
  } else {
    return { beer: {}, isAuthenticated: state.auth.isAuthenticated }
  }
}

export default connect(mapStateToProps, { deleteBeer })(BeerShow);
