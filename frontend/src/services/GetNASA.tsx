import axios from "axios";
import NASAInterface from "../models/NASAInterface";


export default function getNASAPic(): Promise<NASAInterface> {
    let url = "https://api.nasa.gov/planetary/apod";
    
    return axios.get(url, {
        params: {api_key: process.env.REACT_APP_NASA_KEY}
    })
    .then(response => {
        return response.data
    })
}