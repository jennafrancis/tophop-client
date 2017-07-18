import React, { Component } from 'react';
import AddBeer from './components/AddBeer';
import Beers from './components/Beers';
import Navbar from './components/Navbar';
import BeerService from './services/BeerService';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    BeerService.fetchBeers().then(beers => this.setState({ beers }))
  }

  addBeer = beer => {
    BeerService.createBeer(beer).then(beer => this.setState({
      beers: this.state.beers.concat(beer)
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="title">
          <h1>TopHop</h1>
        </div>
        <div className="main">
          <Beers beers={this.state.beers}/>
        </div>
        <div className="form">
          <AddBeer addBeer={this.addBeer}/>
        </div>
      </div>
    );
  }
}

export default App;
