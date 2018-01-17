import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Post
  title={"Dinosaurs are awesome"}
  author={"Stealthy Stegasaurus"}
  body={"Check out this body property!"}
  comments={[
    "First!", 
    "Great Post!", 
    "Hire this author now"
  ]} />, 
document.getElementById('root'));
registerServiceWorker();
