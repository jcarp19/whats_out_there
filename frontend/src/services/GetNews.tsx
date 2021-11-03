import axios from "axios";
import NewsInterface from "../models/NewsInterface";

const newsKey = process.env.REACT_APP_NEWS_KEY || '';

export function getNews(): Promise<NewsInterface> {
    let url = "https://newsapi.org/v2/everything?domains=nasa.gov&apiKey=";

    return axios
        .get<NewsInterface>
        (url, { params: { api_key: process.env.REACT_APP_NEWS_KEY } })

        .then(res => res.data);
}
