import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  render() {
    return (
      <div>
        <h1> Things I should do:</h1>
        <ul>
          <ListItem></ListItem> 
        </ul>
      </ div> 
    );
  }
}

export default MyList;
