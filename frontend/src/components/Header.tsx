// current weather conditions bar goes here.
// maybe logo goes here as well?
// TO DO: make route to weather api
import telescope from "../images/telescope_image.png";
import WeatherRoute from "../routes/WeatherRoute";
// import {searchInputs, loadWeatherByLocation} from "../context/SearchProvider";

export default function Header() {
    return (
        <header>
            <div className="logo_pic">
                <img alt="What's Out There Logo" src={telescope}/>
            </div>

           <WeatherRoute />
        </header>
    )
}