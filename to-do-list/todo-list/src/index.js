import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';

var toDos = ['Buy ice cream', 'eat ice cream', 'go to the gym']

ReactDOM.render(
    <MyList theList={toDos}/>, document.getElementById('root')
);

