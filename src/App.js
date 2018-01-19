import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//import Pages
import Homepage from './Homepage.js';
import FavoriteMovie from './FavoriteMovie.js';
import FavoriteFood from './FavoriteFood.js';
import AboutPage from './AboutPage.js';
import Post from './MainBlog.js';

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

class App extends Component {
  render() {
      return (
   
          <Router>
            <div className='App'>
              <div className='nav-bar'>
                <Link className='nav-logo' to='/'>AstroBlog</Link>
                <Link className='nav-item' to='/about'>About</Link>         
                <Link className='nav-item' to='/blog'>Blog</Link>
                <Link className='nav-item' to='/favoritefood'>Food</Link> 
                <Link className='nav-item' to='/favoritemovie'>Movie</Link> 
              </div>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/blog' component={
                () => (<Post posts={posts}
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
                              ]} />
              )}/>
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/favoritefood' component={FavoriteFood} />
              <Route exact path='/favoritemovie' component={FavoriteMovie} />              

  {/*          <Post />
            <Homepage />
            <FavoriteMovie />
            <FavoriteFood />
            <AboutPage />*/}
            </div>
          </Router>
    )
  }
}

export default App;