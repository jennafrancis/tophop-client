import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBeer } from '../../redux/actions/beers';

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
      style: '',
      featured: false
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleRadio = event => {
    const isFeatured = event.currentTarget.value === "true" ? true: false;
    this.setState({
      featured: isFeatured
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createBeer(this.state, this.props.history);
    console.log(this.state)
    this.setState({
      name: '',
      brewery: '',
      ibu: '',
      abv: '',
      description: '',
      image_url: '',
      style: '',
      featured: false
    })
  }

  render() {
    return(
      <div>
        <h2>Beer Info:</h2>

        <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="beer_name">Beer Name </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
            />
        </div>

        <div>
          <label htmlFor="beer_brewery">Brewery Name </label>
          <input
            type="text"
            name="brewery"
            value={this.state.brewery}
            onChange={this.handleOnChange}
            />
        </div>

        <div>
          <label htmlFor="beer_ibu">IBU: International Bitterness Units </label>
          <input
            type="number"
            name="ibu"
            step="1"
            value={this.state.ibu}
            onChange={this.handleOnChange}
            />
        </div>

        <div>
          <label htmlFor="beer_abv">ABV: Alcohol by Volume (in percent) </label>
          <input
            type="number"
            step="0.1"
            name="abv"
            value={this.state.abv}
            onChange={this.handleOnChange}
            />
        </div>

        <div>
          <label htmlFor="beer_description">Description </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleOnChange}
            />
        </div>

        <div>
          <label htmlFor="beer_image_url">Image Url </label>
          <input
            type="url"
            name="image_url"
            value={this.state.image_url}
            onChange={this.handleOnChange}
            />
        </div>

        <div>
          <label htmlFor="beer_style">Style </label>
          <input
            type="text"
            name="style"
            value={this.state.style}
            onChange={this.handleOnChange}
            />
        </div>

        {this.props.admin &&
          <div>
            <label htmlFor="featured">Featured? </label>
            <input type="radio" name="featured" value="true" onClick={this.handleRadio} /> Yes
            <input type="radio" name="featured" value="false" onClick={this.handleRadio} /> No
          </div>
        }
        
        <button>Add Beer</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.auth.currentUser.admin
  }
}

export default connect(mapStateToProps, { createBeer })(AddBeer);
