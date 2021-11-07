import axios from "axios";
import DarkPark from "../models/DarkPark";

const baseURL = process.env.REACT_APP_BASE_URL || '';


export default function getParkList(): Promise<DarkPark[]> {
    return axios.get<DarkPark[]>
        (`${baseURL}/darkparks`)
        .then(res => res.data);
}

// Steph just added this: fetch to display all the darkpark list
export const fetchParkList = (): Promise<DarkPark[]> => {
    return axios.get<DarkPark[]>(`${baseURL}/darkparklist`).then((res) => res.data);
}


// export function addShoutOut(shoutout: ShoutOutInterface): Promise<ShoutOutInterface>{
//     return axios.post<ShoutOutInterface>(`${baseUrl}/shoutouts`, shoutout)
//     .then((res) => res.data)
// }


//  filter through parks list with id of closest parks