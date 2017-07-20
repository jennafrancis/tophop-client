import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBeer } from '../redux/actions/beers';

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
    this.props.createBeer(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
      <div>
        <h3>New beer info:</h3>
      </div>

      <div>
        <label htmlFor="beer_name">Beer Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
          />
      </div>

      <div>
        <label htmlFor="beer_brewery">Brewery Name</label>
        <input
          type="text"
          name="brewery"
          value={this.state.brewery}
          onChange={this.handleOnChange}
          />
      </div>

      <div>
        <label htmlFor="beer_ibu">IBU: International Bitterness Units</label>
        <input
          type="number"
          name="ibu"
          step="1"
          value={this.state.ibu}
          onChange={this.handleOnChange}
          />
      </div>

      <div>
        <label htmlFor="beer_abv">ABV: Alcohol by Volume (in percent)</label>
        <input
          type="number"
          step="0.1"
          name="abv"
          value={this.state.abv}
          onChange={this.handleOnChange}
          />
      </div>

      <div>
        <label htmlFor="beer_description">Description</label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleOnChange}
          />
      </div>

      <div>
        <label htmlFor="beer_image_url">Image Url</label>
        <input
          type="url"
          name="image_url"
          value={this.state.image_url}
          onChange={this.handleOnChange}
          />
      </div>

      <div>
        <label htmlFor="beer_style">Style</label>
        <input
          type="text"
          name="style"
          value={this.state.style}
          onChange={this.handleOnChange}
          />
      </div>

      <button>Add Beer</button>
      </form>
    )
  }
}

export default connect(null, { createBeer })(AddBeer);
