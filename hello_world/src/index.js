import React from 'react';
import ReactDOM from 'react-dom';
// import Hello component class from App.js
import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

// render Hello dom-node to the ReactDOM. This takes 2 arguments, 1. the name of the component, 2. where the component gets appended to. here hello is being appended to the root div in index.html
ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
