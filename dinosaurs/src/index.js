import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';
// props start their life here
var post = {
    title: "Dinosaurs are extinct",
    authors: [
        "dino1",
        "dino2"
    ],
    body: "This is what the body looks like",
    comments: [
        "first",
        "second",
        "third"
    ]
}

// pass the post prop to Post component
ReactDOM.render(<Post title={post.title} authors={post.authors} body={post.body} comments={post.comments}/>, document.getElementById('root'));
registerServiceWorker();
