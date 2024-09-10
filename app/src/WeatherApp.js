import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudSun, faCloud, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import './WeatherApp.css';

const WeatherApp = () => {
  return (
    <div className="weather-app">
      <div className="current-weather">
        <div className="weather-icon-large">
          <FontAwesomeIcon icon={faSun} />
          <div className="location-info">
            <h2>New York, NY</h2>
            <p>Sunny</p>
          </div>
        </div>
        <div className="weather-info">
          <div className="temperature-info">
            <h1>73°F</h1>
            <div className="hi-low">
              <p>H: 78°F</p>
              <p>L: 61°F</p>
            </div>
          </div>
          <div className="details">
            <p>Feels Like: 74°F</p>
            <p>Wind: 12 MPH</p>
            <p>Humidity: 60%</p>
          </div>
        </div>
      </div>

      <div className="hourly-forecast-container">
        <div className="hourly-forecast">
          {[...Array(24)].map((_, index) => {
            const hour = index === 0 ? 'Now' : `${(index + new Date().getHours()) % 24}:00`;
            return (
              <div key={index} className="hourly-item">
                <p>{hour}</p>
                <FontAwesomeIcon icon={index % 3 === 0 ? faSun : index % 3 === 1 ? faCloudSun : faCloud} />
                <p>73°</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="additional-info">
        <div className="ten-day-forecast">
          <h3>10 Day Forecast</h3>
          {[...Array(10)].map((_, index) => (
            <div key={index} className="forecast-item">
              <p>{index === 0 ? 'Today' : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index % 7]}</p>
              <FontAwesomeIcon icon={index % 2 === 0 ? faSun : faCloudSun} />
              <p>H: 78° L: 61°</p>
            </div>
          ))}
        </div>
        <div className="side-info">
          <div className="radar">
            <h3>Radar</h3>
            <FontAwesomeIcon icon={faLocationCrosshairs} className="radar-icon" />
          </div>
          <div className="air-quality">
            <h3>Air Quality</h3>
            <div className="quality-meter">
              <div className="meter-bar"></div>
            </div>
            <p>10</p>
          </div>
          <div className="sunset">
            <h3>Sunset</h3>
            <FontAwesomeIcon icon={faSun} className="sunset-icon" />
            <p>6:59 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
