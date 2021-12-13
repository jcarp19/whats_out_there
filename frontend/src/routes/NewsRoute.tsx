import NewsInterface from "../models/NewsInterface";
import { getNews } from "../services/GetNews";
import { useState, useEffect } from "react";
import NewsFeed from "../components/NewsFeed";
import telescope_Right from "../images/telescope_Right.svg"
import telescope_Left from "../images/telescope_Left.svg"


export default function NewsRoute() {
    const [news, setNews] = useState<NewsInterface[]>()
    // const [articles, setArticles] = useState<ArticlesEntity[]>()
    useEffect(() => {
        loadNews();
    }, [])
    function loadNews() {
        getNews().then(res => {
            console.log(res)
            // setNews(res)
            setNews(res)
            console.log(news)
        })
    }


    return (
        <div className="news-container">
            <h2 className="newsfeed_h2">Top 3 News Feed</h2>
            {news?.map((article, index) => {
                function assignImage(index: any) {
                    if (index % 2 == 0) {
                        let img = telescope_Right;
                        return img;
                    } else {
                        let img = telescope_Left;
                        return img;
                    }
                }
                return (
                    <div key={index} className="newsArticle_div">
                        <img src={assignImage(index)} alt="telescope inside of a circle" className="telescope_img" />
                        <NewsFeed _id={article._id} title={article.title}  description={article.description} url={article.url} image={article.image} />
                    </div>
                )
            }).slice(0, 3)}

        </div>
    )
}


