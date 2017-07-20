import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import AddBeer from './components/AddBeer';
import Beers from './components/Beers';
import BeerService from './services/BeerService';
import BeerShow from './views/BeerShow';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';

import { fetchBeers, createBeer } from './redux/actions/beers'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchBeers()
  }

  // newBeer = (beer) => {
  //   this.props.addBeer(beer)
  //   // BeerService.createBeer(beer).then(beer => this.setState({
  //   //   beers: this.state.beers.concat(beer)
  //   // }))
  // }

  render() {
    console.log(this.props)
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/beers/new">Add a Beer</NavLink>
            <NavLink className="navlink" to="/login">Login</NavLink>
          </div>
          <div className="title">
            <h1>TopHop</h1>
            <p>Life's better when you're hoppy.</p>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" render={() => (
              <h3>Please select a beer from the list.</h3>
            )} />
            <Route exact path="/beers/new" component={AddBeer} />
            <Route exact path="/login" component={Login} />
            <Route path="/beers/:beerId" component={BeerShow} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beers,
  beerFormData: state.beerFormData,
  auth: state.auth
})

export default connect(mapStateToProps, { fetchBeers })(App);
