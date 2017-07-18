import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import AddBeer from './components/AddBeer';
import Beers from './components/Beers';
import Navbar from './components/Navbar';
import BeerService from './services/BeerService';
import './App.css';

const Signup = () => <div>Signup</div>
const Home = () => <div>Home</div>
const NotFound = () => <div>NotFound</div>

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
            {/*<Navbar />*/}
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/signup">Signup</NavLink>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
          <div className="title">
            <h1>TopHop</h1>
            <p>Something clever about craft beers</p>
          </div>
          <div className="main">
            <Beers beers={this.state.beers}/>
          </div>
          <div className="form">
            <AddBeer addBeer={this.addBeer}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
