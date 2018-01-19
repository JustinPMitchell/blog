import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './MainBlog.js';
import App from './App.js'
import registerServiceWorker from './registerServiceWorker';

var posts = [{
  title: "Dinos rule!",
  content: "We are so neat",
  author: "T-rex",
  comments: ["eh, dionos are okay", "yeah"]
}, {
  title: "Dinos are okay",
  content: "dinos got alot going for them, but I don't know",
  author: "Stego",
  comments: ["totally", "why not?"]
}]


ReactDOM.render(
  <App />
  // <Post posts={posts}
  // title={"Dinosaurs are awesome"}
  // author={"Stealthy Stegasaurus"}
  // body={"Check out this body property!"}
  // comments={[
  //   "First!", 
  //   "Great Post!", 
  //   "Hire this author now"
  // ]}
  // allAuthors={[
  //   "Stealthy Stegosaurus",
  //   "Tiny T-Rex",
  //   "Ivory Iguanodon"
  // ]} />
  , document.getElementById('root'));

registerServiceWorker();

