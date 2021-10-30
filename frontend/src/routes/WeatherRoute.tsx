import WeatherInterface from "../models/WeatherInterface";
import { getSetWeather } from "../services/GetWeather";
import {useEffect, useState} from "react";

export default function WeatherRoute() {
    const[weather, setWeather] = useState<WeatherInterface>();

    useEffect(() => {
        loadWeather();
    }, [])

    function loadWeather() {
        getSetWeather().then(res => setWeather(res))
    }
    return (
        <div className="weather_route_div">

            <div className="timezone_and_conditions_div">
                 {/* Shows timezone. Automatically set to 'America/Detroit' until changed. */}
                <h3 className="timezone_h3">
                <div className="timezone_text">Timezone: </div>  
                {weather?.timezone}</h3>

                {/* Grabs a small description of current weather conditions (example: moderate rain) */}
                 <p className="weather_conditions_p">
                   <div className="conditions_text"> conditions: </div>
                    {weather?.current.weather[0].description}</p>
            </div>
           

            {/* Icon representing weather */}
            <img className="weather_icon_img"src={"http://openweathermap.org/img/wn/" + weather?.current.weather[0].icon + "@2x.png"} alt='icon representing weather conditions'/>

        </div>
    )
}