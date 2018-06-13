// bring react methods and component 
import React, { Component } from 'react';

// name of component 'Hello'. Hello is a specialization that inherits from Component
// export default hello allows the hello component to be available in other files
class Hello extends Component {
  // 'when you create an instance of this class, do this'. 
  constructor(props) {
    // super specifies that when an instance of this class is created, still do the default initialization for this class
    super()
    // this refers to the Hello.self
    this.state = {
      moodPoints: 1
    }

  }
// this method sets the state of moodpoints to be +1 each time the button is clicked. past 10 it will reset back to 1
  increaseMood(e) {

    if (this.state.moodPoints === 10) {
      this.setState({
        moodPoints: 1
      })
    } else {
      this.setState({
        moodPoints: this.state.moodPoints + 1
      })
    }
  }
  // happiness level is making a call to Hello class's state and the key moodpoints to show the happiness level
  render () {
    return (
      <div>
        <h1>Hello world</h1>
        <p>JSX looks like html but it isnt</p>
        <h2>All these elements are in one parent div because you can only return a single DOM object in one component render </h2>
        <p>Your happiness level is {this.state.moodPoints} points</p>
        <button onClick={(e) => this.increaseMood(e)}>Cheer up!</button>
      </div>
    );
  }
}


export default Hello;
