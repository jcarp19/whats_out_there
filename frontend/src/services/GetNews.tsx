
import axios from "axios";
import NewsInterface from "../models/NewsInterface";

// const newsKey = process.env.REACT_APP_NEWS_KEY || "";

// export function getNews(): Promise<NewsInterface> {
//     return axios.get<NewsInterface>(`https://newsapi.org/v2/everything?domains=nasa.gov&language=en&pageSize=10&apiKey=${newsKey}`)
//         .then(res => res.data)
// }

const baseURL = process.env.REACT_APP_BASE_URL || '';

export function getNews(): Promise<NewsInterface[]> {
    return axios.get<NewsInterface[]>(`${baseURL}/news`)
        .then(res => res.data)
}
