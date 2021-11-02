import axios from "axios";
import DarkPark from "../models/DarkPark";

const baseURL = process.env.REACT_APP_BASE_URL || '';

export default function getParkList(): Promise<DarkPark[]> {
    return axios.get<DarkPark[]>
        (`${baseURL}/darkparks`)
        .then(res => res.data);
}


//  filter through parks list with id of closest parks