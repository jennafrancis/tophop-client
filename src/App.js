import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AddBeer from './components/AddBeer';
import BeerShow from './views/BeerShow';
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';
import NotFound from './views/NotFound';
import Admin from './views/Admin';

import { fetchBeers } from './redux/actions/beers'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchBeers()
  }

  requireAuth = () => {
    if (!this.props.auth.isAuthenticated) {
      debugger
      this.props.history.push('/admin')
    }
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <div className="App">

          <div className="navbar">
            <NavLink className="navlink" to="/">Home</NavLink>
            {!this.props.auth.isAuthenticated &&
              <NavLink className="navlink" to="/login">Login</NavLink>
            };
            {this.props.auth.isAuthenticated &&
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
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" render={() => (
              <h3>Please select a beer from the list.</h3>
            )} />
            <Route exact path="/beers/new" render={() => (
              !this.props.auth.isAuthenticated ? (
                <Redirect to='/admin'/>
              ) : (
                <AddBeer />
              )
            )}/>
            <Route exact path="/beers/new" component={AddBeer} onEnter={this.requireAuth}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/admin" component={Admin} />
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
  auth: state.auth
})

export default connect(mapStateToProps, { fetchBeers })(App);
