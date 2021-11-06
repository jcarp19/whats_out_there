// returns 10 news stories (optional: able to load more) based on set space-related criteria.
// uses the newsapi
// TO DO: make route to newsapi

import WeatherRoute from "../routes/WeatherRoute";
import { NavLink } from "react-router-dom";

// used type "any" to avoid errors, but switch back to "ArticlesEntity" when retrieving all the data.
export default function NewsFeedAll({ title, author }: any) {
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

            <WeatherRoute/>
            <h1>NewsFeedAll Goes Here!</h1>
            <p>{title}</p>
            <p>{author}</p>
        </div>
    )
}




// // newsapi key
// //  01506b975fb14e549a407f6016bb935b
// // https://newsapi.org/v2/everything?domains=nasa.gov&apiKey=01506b975fb14e549a407f6016bb935b
// // https://newsapi.org/