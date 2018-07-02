import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  constructor(props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''

    }
  }

  newItemChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e) {
    e.preventDefault()
    var list = this.state.toDoItemArray
    // new item is the variable created by the form submission. it is added to the list array
    list.push(this.state.newItem)
    // update the state with the new item
    // by assigning newitem a blank string you clear out the input field
    this.setState({toDoItemArray: list, newItem: ''})
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
        <form>
          <input type="text"
            placeholder="Type an item here"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
      </ div> 
    );
  }
}

export default MyList;
