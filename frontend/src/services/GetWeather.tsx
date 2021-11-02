import axios from "axios";
import WeatherInterface from "../models/WeatherInterface"

const weatherKey = process.env.REACT_APP_WEATHER_API || '';


export function getSetWeather(): Promise<WeatherInterface>{
    return axios.get<WeatherInterface>
    (`https://api.openweathermap.org/data/2.5/onecall?&lat=42.33&lon=-83.04&exclude=hourly,daily&units=imperial&appid=${weatherKey}`, 
        // params: {
        //     lat: "42.33",
        //     lon: "-83.04",
        //     exclude: "hourly,daily",
        //     appid: weatherKey
        )
    .then(res => res.data)
}

export function getWeatherByLocation(lat:any, lon:any){
    return axios.get<WeatherInterface>
    (`https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${lon}&exclude=hourly,daily&units=imperial&appid=${weatherKey}`)
    .then(res => res.data)

}