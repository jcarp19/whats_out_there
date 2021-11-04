import NewsInterface, { ArticlesEntity } from "../models/NewsInterface";
import { getNews } from "../services/GetNews";
import { useState, useEffect } from "react";



export default function NewsRoute() {

    const [news, setNews] = useState<NewsInterface[]>([]);


    useEffect(() => {
        loadNews();
    }, []); //needs to have 2 arguements!!

    function loadNews() {
        getNews().then(data => {
            // console.log("data: ", data);
            // const articles = res.Object.articles;
            setNews(data);

            Object.values(data); //to make an object into an array
            console.log("data: ", data);

            // to find out if something is an array
            // isArray();
        });

    }

    return (
        <div>
            {news.map((data, index) => {

                return (
                    <div key={index} className="NewsFeed">
                        <h1>NewsFeed Placeholder</h1>
                        <p>{data.articles}</p>

                    </div>
                )
            })}
            {/* <NewsFeed /> */}

        </div>
    )
}
