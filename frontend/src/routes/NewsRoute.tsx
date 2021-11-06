import NewsInterface, { ArticlesEntity } from "../models/NewsInterface";
import { getNews } from "../services/GetNews";
import { useState, useEffect } from "react";
import NewsFeed from "../components/NewsFeed";
import telescope_Right from "../images/telescope_Right.svg"
import telescope_Left from "../images/telescope_Left.svg"


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
                 function assignImage(index: any) {
                    if(index%2 == 0) {
                       let image = telescope_Right;
                       return image;
                    } else {
                        let image = telescope_Left;
                        return image;
                    }
                }
            
                return (
                    <div key={index} className="newsArticle_div">
                    <img src={assignImage(index)} alt="telescope inside of a circle" className="telescope_img"/>
                    <NewsFeed title={article.title} author={article.author} source={article.source} description={article.description} url={article.url} urlToImage={article.urlToImage} publishedAt={article.publishedAt} content={article.content}/>
                    </div>
                )
            })}
        </div>
    )
}


