// current weather conditions bar goes here.
// maybe logo goes here as well?
// TO DO: make route to weather api
import WeatherInterface from "../models/WeatherInterface";
import telescope from "../images/telescope.svg";
import WeatherRoute from "../routes/WeatherRoute";

export default function Header() {
    return (
        <header>
            {/* changed the img element to an object element so I could change the color of the telescope. */}
           <object data={telescope} className="logo_pic"/>

           <WeatherRoute />
        </header>
    )
}