import React, { Component } from 'react';
import Comment from './Comment.js';
import Author from './Author.js';


class Post extends Component {
  // props come from index.js
  constructor(props) {
    super()
    // state comes from index.js line 19
    this.state = {
      body: props.body
    }
  }

  changeBody(e) {
    // get the new body from a user
    // mutate the default body
    let newBody = prompt("what should the new body be?")
    // set state updates the component's state
    this.setState({
      body: newBody
    })
  }

  userInputFieldHandler(e) {
// change the value of the body attribute to the target value of the inpput field 
    this.setState({
      body: e.target.value
    })
  }
  render() {
    let authors = [
      <Author author={this.props.authors[0]}/>,
      <Author author={this.props.authors[1]}/>,
    ]
    let allComments = [
      <Comment body={this.props.comments[0]}/>,   
      <Comment body={this.props.comments[1]}/>,   
      <Comment body={this.props.comments[2]}/>   
    ]
    return (

      <div className="App">
          <h1 className="App-title">{this.props.title}</h1>
          {authors}
          <div>
            <p>{this.state.body}</p>
            <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
            <input type="text" onChange={(e) => this.userInputFieldHandler(e)}/>
          </div>
          <h3>Comments</h3>
          {allComments}
      </div>
    );
  }
}

export default Post;
