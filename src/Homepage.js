import React, { Component } from 'react';
import './App.css';

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shakeSpeare: ''
    }
  }

  componentDidMount() {
   var base = this
   
   let poemApi = 'http://ShakeItSpeare.com/api/poem'
   fetch(poemApi)
    .then((response) => {
      return response.json()
    }).then((json) => {
      base.setState({ shakeSpeare: json.poem });
    }).catch((ex) => {
      console.log('An error occured while parsing! Oh noooo ', ex);
    })
  }

  render() {
      let poetry = this.state.shakeSpeare;
      //want to test setTimeout here
      if(!this.state.shakeSpeare) {
        return (
          <div>
            <h1>Loading...</h1>
          </div>
        )
      }
      return (
        <div className='home-page'>
          <h1>AstroBlog</h1>
          <h2>Pretentious Shakespeare Quote:</h2>
          <em>{poetry}</em>

        </div>
    )
  }
}

export default Homepage;