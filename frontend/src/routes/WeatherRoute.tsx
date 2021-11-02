import WeatherInterface from "../models/WeatherInterface";
import { getSetWeather, getWeatherByLocation } from "../services/GetWeather";
import {useEffect, useState} from "react";



export default function WeatherRoute() {
    const[weather, setWeather] = useState<WeatherInterface>();
    
    useEffect(() => {
        // conditional statement here to see if zipcode was entered. (useState set to true or false?)
        //  then call either loadWeather() of call loadWeatherByLocation()
        loadWeather();
    }, [])

    function loadWeather() {
        getSetWeather().then(res => setWeather(res));
    }

    function loadWeatherByLocation(lat: any, lon: any) {
        // create service call for GetWeatherByLocation()
        // call that service here (.then(res => setWeather(res)))
        // takes lat and lon as arguments
        getWeatherByLocation(lat, lon).then(res => setWeather(res))
    }

    

    function removeAmerica() {
        let timezone:any = weather?.timezone;
         return   timezone?.replace("America/", "")
        
    }

    return (
        <div className="weather_route_div">

            <div className="timezone_and_conditions_div">
                 {/* Shows timezone. Automatically set to 'America/Detroit' until changed. */}
                <h3 className="timezone_h3">
                <div className="timezone_text">Time Zone: </div> 
                {removeAmerica()}</h3>

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