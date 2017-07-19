import React, { Component } from 'react';
import BeerDetails from '../components/BeerDetails';

const BeeShow = (props) =>
  <div className="main">
    <BeerDetails beer={props.beer} />
  </div>

const BeerShow = props =>
  <div><h3>beer show component</h3></div>


export default BeerShow;
