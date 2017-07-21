import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BeerLove extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: this.props.count
    }
  }

  onClick = () => {
    let count = this.state.counter
    count += 1
    this.setState({
      counter: count
    })
  }

  render() {
    return (
      <div className="beer-list" key={this.props.beer.id}>
        <Link to={`/beers/${this.props.beer.id}`} className="beer-basic"><h4 >{this.props.beer.name}, {this.props.beer.brewery}</h4></Link>
        <p><img className="home-img" src={this.props.beer.image_url} alt={this.props.beer.name} /></p>
        <button onClick={this.onClick}>Love it!</button>
        <p>How much do you love it? {this.state.counter}</p>
      </div>
    )
  }
}

export default BeerLove
