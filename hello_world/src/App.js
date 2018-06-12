// bring react methods and component 
import React, { Component } from 'react';

// name of component 'Hello'. Hello is a specialization that inherits from Component
// export default hello allows the hello component to be available in other files
class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello world</h1>
        <p>JSX looks like html but it isnt</p>
        <h2>All these elements are in one parent div because you can only return a single DOM object in one component render </h2>
      </div>
    );
  }
}


export default Hello;
