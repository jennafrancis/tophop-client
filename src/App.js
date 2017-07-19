import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';
import { fetchBeers, addBeer } from './redux/actions/beers'
import AddBeer from './components/AddBeer';
import Beers from './components/Beers';
import BeerService from './services/BeerService';
import './App.css';

class App extends Component {
  componentDidMount() {
    // BeerService.fetchBeers().then(beers => this.setState({ beers }))
    this.props.fetchBeers()
  }

  addBeer = beer => {
    this.props.addBeer(this.props.beerFormData)
    // BeerService.createBeer(beer).then(beer => this.setState({
    //   beers: this.state.beers.concat(beer)
    // }))
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/login">Admin</NavLink>
          </div>
          <div className="title">
            <h1>TopHop</h1>
            <p>Life's better when you're hoppy.</p>
          </div>

          <Switch>
            <Route exact path="/" render={(props) => (
              <Home {...props} beers={this.props.beers} />
            )} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>

          <div className="form">
            {/*<AddBeer addBeer={this.addBeer} beerFormData={this.props.beerFormData} />*/}
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beers,
  currentBeer: state.currentBeer,
  beerFormData: state.beerFormData,
  auth: state.auth
})

export default connect(mapStateToProps, { fetchBeers, addBeer })(App);
