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
    var hour = a.getHours() >= 12 ? a.getHours() - 12 + 'PM' : a.getHours() + 'AM';
    if (hour == "0PM"){
       hour = "12PM"
    }
    // var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
    var time = month + ' ' + date +  ' ' + hour  ;
    return time;
    
  }

  function formatDate(unix: any) {
    var a = new Date(unix * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
    // var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
    var monthDate = month + ' ' + date ;
    return monthDate;  
  }

  function formatTemp(temp: any){
        let fixedTemp = temp.toFixed()
        return fixedTemp;
  }

  

  return (
    <div className="modal">
      <div className="modal-content">
      <span
          className="close"
          onClick={(e) => {document.querySelectorAll(".modal_container").forEach((item) => item.classList.toggle("hidden"));}}>
          &times;
        </span>
        <h2 className="modal_h2">5 Hour Forecast</h2>
        <div className="hourly_forecast">
            {weather?.hourly.map((hour, index) => {
                return (
                     <div key={index} className="hour_info">
                         <p className="forecast_p">
                        <img className="weather_icon_img" src={
                        "http://openweathermap.org/img/wn/" +
                        hour.weather[0].icon +
                        "@2x.png" } alt="icon representing weather conditions" />
                        </p>
                        <div className="forecast_card">
                           <p className="forecast_p"> {formatDateTime(hour.dt)} </p>
                             <p className="forecast_p">{formatTemp(hour.temp)}°</p>
                        </div>
                    </div>
                )
            }).slice(0, 5)}
        </div>
        
        <h2 className="modal_h2">7 Day Forecast</h2>
        <div className="daily_forecast">
            {weather?.daily.map((day, index) => {
                return <div key={index} className="daily_info">
               <p className="forecast_p">
              <img className="weather_icon_img" src={
              "http://openweathermap.org/img/wn/" +
              day.weather[0].icon +
              "@2x.png" } alt="icon representing weather conditions" />
              </p>
              <div className="forecast_card">
                   <p className="forecast_p"> {formatDate(day.dt)}</p>
                    <p className="forecast_p">{formatTemp(day.temp.day)}°</p>
                </div>
              </div>;
             }).slice(0,7)}
        </div>
        
      </div>
    </div>
  );
}
