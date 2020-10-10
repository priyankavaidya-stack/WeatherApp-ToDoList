import React, { useState } from "react";
import "./Weather.css";

const api = {
  key: "0675403a19e597c2cead60487a78fa46",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="weather">
      <div
        className={
          typeof weather.main != "undefined"
            ? weather.main.temp < 5
              ? "sky"
              : weather.main.temp < 16
              ? "weather_card"
              : "nature"
            : "nature"
        }
      >
        <h6 className="weather_title">Weather App</h6>
        <p className="weather_ref">Search city with proper name</p>
        <h6 className="weather_searchBox">
          <input
            className="search_box"
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </h6>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="weather_location">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather_info">
              <div className="weather_temp">
                {Math.round(weather.main.temp)}&deg;C
              </div>
              <div className="weather_tempType">
                <h6 className="temp_type">
                  {Math.round(weather.main.temp_min)}&deg;C
                </h6>
                <h6 className="temp_type">
                  {Math.round(weather.main.temp_max)}&deg;C
                </h6>
              </div>
              <div className="weather_type">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Weather;
