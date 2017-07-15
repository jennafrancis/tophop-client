import React, { Component } from 'react';
import Beers from './components/Beers';
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

  render() {
    return (
      <div className="App">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>
        <div className="title">
          <h1>TopHop</h1>
        </div>
        <div className="main">
          <Beers beers={this.state.beers}/>
        </div>
        <div className="form">
          {/* <Beer /> */}
        </div>
      </div>
    );
  }
}

export default App;
