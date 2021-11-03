// returns 10 news stories (optional: able to load more) based on set space-related criteria.
// uses the newsapi
// TO DO: make route to newsapi

import ArticlesEntity from "../models/NewsInterface";
import NewsInterface from "../models/NewsInterface";
import { getNews } from "../services/GetNews";

export default function NewsFeed({ title, description, url }: NewsInterface) {
    return (
        <div>
            <h1>NewsFeed Placeholder</h1>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>url: {url}</p>
        </div>
    );
}

// newsapi key
//  01506b975fb14e549a407f6016bb935b
// https://newsapi.org/v2/everything?domains=nasa.gov&apiKey=01506b975fb14e549a407f6016bb935b
// https://newsapi.org/