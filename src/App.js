import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(" ");
  let [temp, setTemp] = useState(" ");
  let [description, setDescription] = useState(" ");
  let [humidity, setHumidity] = useState(" ");
  let [wind, setWind] = useState(" ");
  let [icon, setIcon] = useState(" ");
  let [ul, setUl] = useState(" ");

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6605fc03f7aea0369923c76b4eb46d07&units=metric`;

  function showWeather(response) {
    setTemp(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
    );
  }
  function handelSubmit(event) {
    event.preventDefault();
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handelSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
        <ul>
          <li>Temperature: {temp}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}</li>
          <li>Wind: {wind}</li>
          <li>
            <img src={icon} alt="icon" />
          </li>
        </ul>
      </form>
      <a href='https://github.com/Emilua/weather_app.git'>My project </a>developed by Emil
    </div>
  );
}