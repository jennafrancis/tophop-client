import React, { Component } from 'react';
import Beers from './components/Beers';
import BeerService from './services/BeerService';
import './App.css';

// let beers = [
//   { id: 1, name: 'Puff', brewery: 'Sixpoint Brewery' },
//   { id: 2, name: 'Doom', brewery: 'Founders Brewing Co.' },
//   { id: 3, name: '120 Minute IPA', brewery: 'Dogfish Head Brewery' }
// ]

class App extends Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    BeerService.fetchBeers()
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
          <Beers beers={beers}/>
        </div>
        <div className="form">
          {/* <Beer /> */}
        </div>
      </div>
    );
  }
}

export default App;
