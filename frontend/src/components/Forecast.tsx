import { WeatherInterface } from "../models/WeatherInterface";
import { getWeekForecast } from "../services/GetWeather";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../context/SearchProvider";

export default function Forecast() {
  const [weather, setWeather] = useState<WeatherInterface>();
  const { loadWeatherByLocation, searchInputs } = useContext(SearchContext);

  useEffect(() => {
    console.log(searchInputs[0]);
    getWeekForecast(searchInputs[0].searchLat, searchInputs[0].searchLon).then(
      (res) => setWeather(res)
    );
  }, []);

  function formatDateTime(unix: any) {
    var a = new Date(unix * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
    // var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
    var time = month + ' ' + date + ' ' + year + ' ' + hour + ':' + min ;
    return time;
    
  }

  return (
    <div className="modal">
      <div className="modal-content">
      <span
          className="close"
          onClick={(e) => {document.querySelectorAll(".modal_container").forEach((item) => item.classList.toggle("hidden"));}}>
          &times;
        </span>
        <div className="hourly_forecast info-card">
            <h2>5 Hour Forecast</h2>
            {weather?.hourly.map((hour, index) => {
                return (
                     <div key={index} className="hour_info">
                        {formatDateTime(hour.dt)}
                        <p>Temperature:</p> {hour.temp}°
                        <p>
                        <img className="weather_icon_img" src={
                        "http://openweathermap.org/img/wn/" +
                        hour.weather[0].icon +
                        "@2x.png" } alt="icon representing weather conditions" />
                        </p>
                    </div>
                )
            }).slice(0, 5)}
        </div>

        <div className="info-card">
            <h2>7 Day Forecast</h2>
            {weather?.daily.map((day, index) => {
                return <div key={index} className="daily_info">
              
              <p>Date:</p>{formatDateTime(day.dt)}PM
              <p>Temperature:</p>{day.temp.day}°
              <p>
              <img className="weather_icon_img" src={
              "http://openweathermap.org/img/wn/" +
              day.weather[0].icon +
              "@2x.png" } alt="icon representing weather conditions" />
              </p>
              </div>;
             }).slice(0,7)}
        </div>
        
      </div>
    </div>
  );
}
