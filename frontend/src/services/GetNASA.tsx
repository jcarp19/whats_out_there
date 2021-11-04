import axios from "axios";
import NASAInterface from "../models/NASAInterface";

const nasaKey = process.env.REACT_APP_NASA_KEY || '';

export default function getNASAPic(): Promise<NASAInterface> {
    let url ="https://api.nasa.gov/planetary/apod";
    return axios
    .get(url,{params:{api_key: nasaKey}})
    .then(res => {
        return res.data;
    })
}
