import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import Home from '../views/Home';
import Login from '../views/Login';
import NotFound from '../views/NotFound';

import AddBeer from '../components/AddBeer';
import Beers from '../components/Beers';
import BeerService from '../services/BeerService';
import '../App.css';

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
      <Router>
        <div className="App">
          <div className="navbar">
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/login">Admin Login</NavLink>
          </div>

          <div className="title">
            <h1>TopHop</h1>
            <p>Something clever about craft beers</p>
          </div>

          <Switch>
            <Route exact path="/" render={(props) => (
              <Home {...props} beers={this.state.beers} />
            )} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>

          <div className="form">
            <AddBeer addBeer={this.addBeer}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
