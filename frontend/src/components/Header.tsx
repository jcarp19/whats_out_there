// current weather conditions bar goes here.
// maybe logo goes here as well?
// TO DO: make route to weather api
import telescope from "../images/telescope_image.png";
import WeatherRoute from "../routes/WeatherRoute";


export default function Header() {
    return (
        <header>
           <img alt="What's Out There Logo" src={telescope} className="logo_pic"/>

           <WeatherRoute />
        </header>
    )
}