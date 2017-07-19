import React from 'react';

const BeerForm = () => (
  <form onSubmit={this.props.handleOnSubmit}>
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

export default BeerForm;
