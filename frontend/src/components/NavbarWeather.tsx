import { WeatherInterface} from "../models/WeatherInterface";
import { NavLink } from "react-router-dom";
import Forecast from "../components/Forecast"


interface Props {
    weather?: WeatherInterface;
    forecast?: WeatherInterface | any;
}

export default function NavbarWeather({weather, forecast}: Props) {
    
    function formatWeather() {
        let timeZone = weather?.timezone;
        timeZone = timeZone?.replace("America/", "")
        timeZone = timeZone?.replace("_", " ")
        return timeZone;

    }

    function formatTemp(temp: any){
        let fixedTemp = temp?.toFixed()
        return fixedTemp;
    }

   
    return (        
        <div className="desktop-wrap_nav_weather">
                <nav className="navbar_home">
                    <ul>
                        <li className="navbar-item"><NavLink to="/" style={{ textDecoration: "none" }}>Home</NavLink></li>
                        <li className="navbar-item"><NavLink to="/learnmore" style={{ textDecoration: "none" }}>Learn More</NavLink></li>
                        <li className="navbar-item"><NavLink to="/news" style={{ textDecoration: "none" }}>News</NavLink></li>
                        <li className="navbar-item"><NavLink to="/darkparklist" style={{ textDecoration: "none" }}>Park List</NavLink></li>
                    </ul>
                </nav>

    
                <div className="weather_route_div_home">
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
                        <p className="temp_p">{formatTemp(weather?.current.temp)}°</p>
                        {/* Icon representing weather */}
                        <img className="weather_icon_img" src={"http://openweathermap.org/img/wn/" + weather?.current.weather[0].icon + "@2x.png"} alt='icon representing weather conditions' />
                        {/* link to see 7-day forescast and more details */}
                        <p onClick={(e) => {
                            e.preventDefault();
                            document.querySelectorAll(".modal_container").forEach(item => item.classList.toggle("hidden"))}} className="weather_info_p" >&#9432;</p>
                    </div>
                </div>

                <div className="modal_container hidden">
                    <Forecast forecast={forecast}/>
                </div>
            </div>

    )

}

