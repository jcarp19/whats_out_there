import axios from "axios";
import DarkPark from "../models/DarkPark";
import {Comments} from "../models/DarkPark";

const baseURL = process.env.REACT_APP_BASE_URL || '';

export default function getParkList(): Promise<DarkPark[]> {
    return axios.get<DarkPark[]>
        (`${baseURL}/darkparks`)
        .then(res => res.data);
}

export function upDateOne(id:any, comment: Comments): Promise<Comments>{
    return axios.put<Comments>(`${baseURL}/darkparks/addcomment/${id}`, comment)
    .then((res) => res.data)
}

// , id:string
//  filter through parks list with id of closest parks