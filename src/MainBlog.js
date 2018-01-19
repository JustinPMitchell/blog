import React, { Component } from 'react';
import logo from './logo.svg';
import Comment from "./Comment.js"
import Author from './Author.js';
import './App.css';

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moodPoints: 1
    }
  }

  increaseMood(e) {
    this.state.moodPoints <= 9 ? this.setState({moodPoints: this.state.moodPoints + 1}) : this.setState({moodPoints: 1});
  }

  render() {
    const allPosts = this.props.posts.map(p => {
      return (
        <div className='post'>
          <h1 className="Title">{p.title}</h1>
          <Author author={p.author} />
          <p className="Post-intro">
            {p.content}
          </p>
          <h2>Comments:</h2>
          <Comment comments={p.comments} />
        </div>
      );
    });
    var authors = <Author author={this.props.allAuthors}/>;
    return (
    <div className="Post">
      <header className="Post-header">
        <h1 className="Post-title">Dino Blog</h1>
        <p className="Post-intro"> All the latest and greatest things from 65 million years ago</p>
      </header>
      <h3>This is my current mood (on a scale of 1 to 10): {this.state.moodPoints}</h3>
      <button onClick={ (e)=> this.increaseMood(e) }></button>
      {allPosts}
      <hr/>
      {/* This is a comment in JS! */}

      </div>
    )
  }
}



export default Post;