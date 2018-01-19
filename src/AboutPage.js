import React, { Component } from 'react';
import './App.css';
import profilePic from './gg.jpg';

class AboutPage extends Component {
  render() {
      return (
        <div className='about-page'>
          <h1>About</h1>
          <img src={profilePic} alt="profile" className='profile-pic' />
        </div>
    )
  }
}

export default AboutPage;