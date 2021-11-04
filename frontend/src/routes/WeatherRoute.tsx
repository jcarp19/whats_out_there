import WeatherInterface from "../models/WeatherInterface";
import { getSetWeather, getWeatherByLocation } from "../services/GetWeather";
import {useEffect, useState, useContext} from "react";
import { SearchContext } from "../context/SearchProvider";



export default function WeatherRoute() {
    const[weather, setWeather] = useState<WeatherInterface>();
    const{loadWeatherByLocation, searchInputs} = useContext(SearchContext);
    const [resetSearch, setResetSearch] = useState();
    
    useEffect(() => {

    // from here
        console.log(searchInputs[0]);
       getSetWeather(searchInputs[0].searchLat, searchInputs[0].searchLon).then(res => setWeather(res));
    }, [])

    function loadWeather() {
        getSetWeather(searchInputs[0].searchLat, searchInputs[0].searchLon).then(res => setWeather(res));
    }

    function formatWeather() {
        let timeZone = weather?.timezone;
         return   timeZone?.replace("America/", "")
        
    }
    // to here

    return (
        <div className="weather_route_div">

            <div className="timezone_and_conditions_div">
                 {/* Shows timezone. Automatically set to 'America/Detroit' until changed. */}
                <h3 className="timezone_h3">
                <div className="timezone_text">Time Zone: </div> 
                {formatWeather()}</h3>

                {/* Grabs a small description of current weather conditions (example: moderate rain) */}
                 <p className="weather_conditions_p">
                   <p className="conditions_text"> Conditions: </p>
                    {weather?.current.weather[0].description}</p>
            </div>
           
            <div className="temp_icon_details_div">
                {/* temperature */}
                <p className="temp_p">{weather?.current.temp}°</p>
                 {/* Icon representing weather */}
                <img className="weather_icon_img"src={"http://openweathermap.org/img/wn/" + weather?.current.weather[0].icon + "@2x.png"} alt='icon representing weather conditions'/>
                {/* link to see 7-day forescast and more details */}
                <p className="weather_info_p">&#9432;</p>
            </div>
     

        </div>
    )
}