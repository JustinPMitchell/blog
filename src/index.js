import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import Author from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Post
  title={"Dinosaurs are awesome"}
  author={"Stealthy Stegasaurus"}
  body={"Check out this body property!"}
  comments={[
    "First!", 
    "Great Post!", 
    "Hire this author now"
  ]}
  allAuthors={[
    "Stealthy Stegosaurus",
    "Tiny T-Rex",
    "Ivory Iguanodon"
  ]} />, 
document.getElementById('root'));

// ReactDOM.render(<Author />, 
// document.getElementById('root'));
// registerServiceWorker();

