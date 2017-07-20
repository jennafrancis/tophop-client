import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBeer } from '../redux/actions/beers'

// const BeerShow = ({ beer }) =>
//   <div className="show-beer" key={beer.id}>
//     <h2>{beer.name}, {beer.brewery}</h2>
//     <p><img className="show-img" src={beer.image_url} alt={beer.name} /></p>
//     <h3>{beer.style}</h3>
//     <h4>ABV: {beer.abv}% | IBU: {beer.ibu}</h4>
//     <p className="description">{beer.description}</p>
//     <button>Delete Beer</button>
//   </div>

class BeerShow extends Component {
  handleOnClick = () => {
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
        <button onClick={this.handleOnClick}>Delete Beer</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const beer = state.beers.find(beer => beer.id == ownProps.match.params.beerId)
  if (beer) {
    return { beer }
  } else {
    return { beer: {} }
  }
}

export default connect(mapStateToProps, { deleteBeer })(BeerShow);
