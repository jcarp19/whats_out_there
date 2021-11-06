// park list would already be set closest to furthest based on zipcode entered on homepage. (pass zipcode as props)
// this page would include another zipcode search so the user can look up more than one location.
// use case (example): if you live in detroit but plan on taking a trip to Arizona.
// list and define dark park designations (maybe put sources here too)
import { NavLink } from "react-router-dom";
import WeatherRoute from "../routes/WeatherRoute";
import DarkParkSearch from "./DarkParkSearch";


export default function DarkParkList() {
    // const [weather, setWeather] = useState();
    // const {searchInputs} = useContext(SearchContext)


    // useEffect(() => {
    //     getSetWeather(searchInputs[0].searchLat, searchInputs[0].searchLon).then(res => setWeather(res))
    // }, [])


    return (
        <div>
             <nav className="navbar">
            <ul>
              <li><NavLink to="/" style={{textDecoration: "none"}}><p className="navbar_p">Home</p></NavLink></li>
              <li><NavLink to="/learnmore" style={{textDecoration: "none"}}><p className="navbar_p">Learn More</p></NavLink></li>
              <li><NavLink to="/news" style={{textDecoration: "none"}}><p className="navbar_p">News</p></NavLink></li>
              <li><NavLink to="/darkparklist" style={{textDecoration: "none"}}><p className="navbar_p">Park List</p></NavLink></li>
            </ul>
          </nav>

            <DarkParkSearch/>
            <h1>DarkParkList Page!</h1>
        </div>
    )
}