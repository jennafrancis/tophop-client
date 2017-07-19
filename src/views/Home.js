import React, { Component } from 'react';
import Beers from '../components/Beers';

const Home = (props) =>
  <div className="main">
    <Beers beers={props.beers} />
  </div>

export default Home;
