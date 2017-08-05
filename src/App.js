import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AddBeer from './components/beers/AddBeer';
import Admin from './components/users/Admin';
import AllBeers from './components/beers/AllBeers';
import Beer from './components/beers/Beer';
import Featured from './components/beers/Featured';
import Login from './components/users/Login';
import LoggedIn from './components/users/LoggedIn';
import Logout from './components/users/Logout';
import NotFound from './components/NotFound';
import Signup from './components/users/Signup';

import { fetchBeers } from './redux/actions/beers'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchBeers()
  }

  requireAuth = () => {
    if (!this.props.isAuthenticated) {
      this.props.history.push('/admin')
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <NavLink className="navlink" to="/">Featured</NavLink>
            <NavLink className="navlink" to="/beers">All Brews</NavLink>
            {!this.props.isAuthenticated &&
              <span>
                <NavLink className="navlink" to="/login">Log In</NavLink>
                <NavLink className="navlink" to="/signup">Sign Up</NavLink>
              </span>
            };
            {this.props.isAuthenticated &&
              <span>
                <NavLink className="navlink" to="/beers/new">Add a Beer</NavLink>
                <NavLink className="navlink" to="/logout">Logout</NavLink>
              </span>
            }
          </div>

          <div className="title">
            <h1 className="tophop">TopHop</h1>
            <p className="catch-line">Life's better when you're hoppy.</p>
          </div>

          <Switch>
            <Route exact path="/" component={Featured} />
            <Route exact path="/beers" component={AllBeers} />
            <Route exact path="/beers/new" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={AddBeer} />
              )
            )}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/oops" component={LoggedIn} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/beers/:beerId" component={Beer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beers,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { fetchBeers })(App);
