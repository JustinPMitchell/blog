import React, { Component } from 'react';
import './App.css';
import profilePic from './gg.jpg';
import WeatherWidget from './WeatherWidget.js'

class AboutPage extends Component {
  constructor(props) {
    super(props)
      // Use the response to display the current temperature, the high and low temperate, the current weather description, and the name of the city that came back from the API.
    this.state = {
      currentTemperature: '',
      highTemperature: '',
      lowTemperature: '',
      currentWeatherDescription: '',
      city: '',
      zip: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    var base = this

    let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=98122,us&appid=052f26926ae9784c2d677ca7bc5dec98'
    fetch(weatherApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
        base.setState({ 
          currentTemperature: json.main.temp,
          highTemperature: json.main.temp_max,
          lowTemperature: json.main.temp_min,
          currentWeatherDescription: json.weather[0].description,
          city: json.name

        });
      }).catch((ex) => {
        console.log('An error occurred ', ex);
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('this is the zip', this.state.zip);
    var base = this
    let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=' + this.state.zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98'
    console.log('this is the api: ' + weatherApi);
    let weatherApiKey = '&appid=052f26926ae9784c2d677ca7bc5dec98'
    fetch(weatherApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
        base.setState({ 
          currentTemperature: json.main.temp,
          highTemperature: json.main.temp_max,
          lowTemperature: json.main.temp_min,
          currentWeatherDescription: json.weather[0].description,
          city: json.name

        });
      }).catch((ex) => {
        console.log('An error occurred ', ex);
      })
  }

  handleChange(e) {
    this.setState({zip: e.target.value});
  }


  render() {
    //let poetry = this.state.shakeSpeare;
    let currentTemperature = this.state.currentTemperature;
    let highTemperature = this.state.highTemperature;
    let lowTemperature = this.state.lowTemperature;
    currentTemperature -= 272;
    highTemperature -= 272;
    lowTemperature -= 272;
    let currentWeatherDescription = this.state.currentWeatherDescription;
    let city = this.state.city;

      return (
        <div className='about-page'>
          <WeatherWidget currentTemperature={this.state.currentTemperature}
                          highTemperature={this.state.highTemperature}
                          lowTemperature={this.state.lowTemperature}
                          currentWeatherDescription={this.state.currentWeatherDescription}
                          city={this.state.city} />
          <h1>About</h1>
          <img src={ profilePic } alt="profile" className='profile-pic' />
          <h2>Check it out I can do Weather API calls using React</h2>
          <h3>la-di-da ~~~</h3>
          <p>City: { city }</p>
          <p>Current Temperature: { currentTemperature } °C</p>
          <p>High Temperature: { highTemperature } °C</p>
          <p>Low Temperature: { lowTemperature } °C</p>
          <p>Description: { currentWeatherDescription }</p>
          <form onSubmit={this.handleSubmit}>
            <input type='number' onChange={this.handleChange}/>
            <input type='submit' value='Submit' />
          </form>
        </div>
    )
  }
}

export default AboutPage;