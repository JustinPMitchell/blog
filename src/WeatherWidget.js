import React from 'react';

const WeatherWidget = (props) => {


    return (
      <div className='WeatherWidget'>
          <p>City: { props.city }</p>
          <p>Current Temperature: { Math.round(props.currentTemperature - 272) } °C</p>
          <p>{ Math.round(props.highTemperature - 272) } °C | { Math.round(props.lowTemperature - 272) } °C</p>
          <p>Description: { props.currentWeatherDescription }</p>

      </div>
      )
}

export default WeatherWidget;