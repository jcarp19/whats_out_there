import NewsInterface, { ArticlesEntity } from "../models/NewsInterface";
import { getNews } from "../services/GetNews";
import { useState, useEffect } from "react";
import NewsFeed from "../components/NewsFeed";
export default function NewsRoute() {
    const [news, setNews] = useState<NewsInterface>()
    useEffect(() => {
        loadNews();
    }, [])
    function loadNews() {
        getNews().then(res => {
            console.log(res)
            setNews(res)
            console.log(news)
        })
    }
    return (
        <div>
            <h2>NewsFeed</h2>
            {news?.articles.map((article, index) => {
                return (
                    <NewsFeed title={article.title} author={article.author} />
                )
            })}
        </div>
    )
}


