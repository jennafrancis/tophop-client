import React, { Component } from 'react';
import BeerDetails from '../components/BeerDetails';

const BeerShow = (props) =>
  <div className="main">
    <BeerDetails beer={props.beer} />
  </div>


export default BeerShow;
