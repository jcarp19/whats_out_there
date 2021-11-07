// returns 10 news stories (optional: able to load more) based on set space-related criteria.
// uses the newsapi
// TO DO: make route to newsapi

import WeatherRoute from "../routes/WeatherRoute";
import { NavLink } from "react-router-dom";
import NewsInterface, { ArticlesEntity } from "../models/NewsInterface";
import { useEffect, useState } from "react";
import { getNews } from "../services/GetNews";
import DarkParkSearch from "./DarkParkSearch";
import telescope_Right from "../images/telescope_Right.svg"
import telescope_Left from "../images/telescope_Left.svg"

// used type "any" to avoid errors, but switch back to "ArticlesEntity" when retrieving all the data.
export default function NewsFeedAll() {

  // const [newsFeedAll, setNewsFeedAll] = useState<NewsInterface>()

  // useEffect(() => {

  //   loadNewsFeedAll();
  // }, [])

  // function loadNewsFeedAll() {
  //   getNews().then(res => {
  //     setNewsFeedAll(res);
  //     console.log(res);
  //   })
  // }

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><NavLink to="/" style={{ textDecoration: "none" }}><p className="navbar_p">Home</p></NavLink></li>
          <li><NavLink to="/learnmore" style={{ textDecoration: "none" }}><p className="navbar_p">Learn More</p></NavLink></li>
          <li><NavLink to="/news" style={{ textDecoration: "none" }}><p className="navbar_p">News</p></NavLink></li>
          <li><NavLink to="/darkparklist" style={{ textDecoration: "none" }}><p className="navbar_p">Park List</p></NavLink></li>
        </ul>
      </nav>

      <WeatherRoute />

      <div>
        <h2 aria-label="addH2" role="H2" className="park-list-headline">News Feed</h2>


        {/* {newsFeedAll?.articles.map((article, index) => {
          function assignImage(index: any) {
            if (index % 2 == 0) {
              let image = telescope_Right;
              return image;
            } else {
              let image = telescope_Left;
              return image;
            }
          }

          return (
            <div key={index} className="newsArticle_div">
              <img src={assignImage(index)} alt="telescope inside of a circle" className="telescope_img" />
              <p>title={article.title} author={article.author} source={article.source} description={article.description} url={article.url} urlToImage={article.urlToImage} publishedAt={article.publishedAt} content={article.content} </p>
            </div> */}
        )
        {/* })} */}
      </div>
    </div>
  )
}




// // newsapi key
// //  01506b975fb14e549a407f6016bb935b
// // https://newsapi.org/v2/everything?domains=nasa.gov&apiKey=01506b975fb14e549a407f6016bb935b
// // https://newsapi.org/