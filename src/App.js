import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Post extends Component {
  render() {
    var authors = <Author authors={this.props.allAuthors}/>;
    return (
      <div>
        <h1>{this.props.title}</h1>
        {authors}
        <p>{this.props.body}</p>
        <h2>Comments:</h2>
          <p>{this.props.comments[0]}</p>
      </div>
    );
  }
}

class Author extends Component {
  render() {
    return (
      <div>
        {this.props.authors.map( things => <p>Written by {things}</p>)}
      </div>
    );
  }
}

export default Post;