import React, { Component } from 'react';
import BeerForm from './BeerForm'

class AddBeer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      brewery: '',
      ibu: '',
      abv: '',
      description: '',
      image_url: '',
      style: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const beer = this.state
    this.props.addBeer(beer)
    this.setState({
      name: '',
      brewery: '',
      ibu: '',
      abv: '',
      description: '',
      image_url: '',
      style: ''
    })
  }

  render() {
    return (
      <BeerForm handleOnSubmit={this.handleOnSubmit}/>
    )
  }
}

export default AddBeer;
