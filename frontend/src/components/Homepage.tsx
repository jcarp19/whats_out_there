// this would have the tab navigation to house news, dark parks list, and potentially fun nasa apis and a star chart widget.
// user could enter zipcode here and we can use the input for the weather conditions and set the dark park list.
import { useEffect, useState } from "react";
import { setOriginalNode } from "typescript";
import { setFlagsFromString } from "v8";
import fence from "../images/fence.png";
import DarkPark from "../models/DarkPark";
import {LongLat} from "../models/LongLat";
import getParkList from "../services/GetParkList";

export default function Homepage() {
    const [lat, setLat] = useState()
    const [lon, setLon] = useState();
    const [darkParkList, setDarkParkList] = useState<DarkPark[]>([]);
    
    useEffect(() => {
        getParkList().then(res => setDarkParkList(res));
    },[])

    return (
        <>
        <main>
            <img src={fence} alt="fence with night sky in the background." className="fence_pic"/>
            <h1 className="homepage_h1">What's Out There?</h1>
            <form aria-label = "addForm" role = "Form">
                <label aria-label = "addLabel" role = "Label" htmlFor="search">
                    <input name="search" id="search" type="text" onChange={(e) => {
                        if(e.target.value.length == 5) {
                            LongLat.forEach(array => {
                                if(array[0] == e.target.value) {
                                setLat(array[1]);
                                setLon(array[2]);
                                console.log(lat)
                                console.log(lon);
                        }
                    })
                }
                }}/>
                </label>
                <button aria-label = "addButton" role = "Button" type="submit">Search</button>
            </form>

        </main>
            <div>
                <h2 aria-label = "addh2" role = "h2">Park List</h2>
                {darkParkList?.map((park, index) => {
                    return (
                        <div key={index}>
                            <p>{park.name}</p>
                            <p>{park.state}</p>
                            <p>{park.description}</p>
                        </div>
                    )
            })}</div>
    </>
    )
}