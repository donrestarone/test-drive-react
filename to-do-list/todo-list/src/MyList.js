import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  constructor(props) {
    super()
    this.state = {
      toDoItemArray: props.theList
    }
  }
  clearList(e) {
    this.setState({
      toDoItemArray: []
    })
  }
  render() {
    let toDoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} /> 
    ))
    return (
      <div>
        <h1> Things I should do:</h1>
        <ul>
          {toDoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </ div> 
    );
  }
}

export default MyList;
