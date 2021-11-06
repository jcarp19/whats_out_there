import axios from "axios";
import DarkPark from "../models/DarkPark";
import {Comments} from "../models/DarkPark";

const baseURL = process.env.REACT_APP_BASE_URL || '';

export default function getParkList(): Promise<DarkPark[]> {
    return axios.get<DarkPark[]>
        (`${baseURL}/darkparks`)
        .then(res => res.data);
}

export function upDateOne(comment: Comments, parkId:string): Promise<Comments>{
    return axios.post<Comments>(`${baseURL}/darkparks`, comment)
    .then((res) => res.data)
}


//  filter through parks list with id of closest parks