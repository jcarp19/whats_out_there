import { useEffect, useState } from "react";
import DarkPark from "../models/DarkPark";
import {LongLat} from "../models/LongLat";
import getParkList from "../services/GetParkList";


export default function DarkParkSearch() {
    // receive zip code from form
    // make sure it's on the list. If not return an err message
    // return lon/lat , 
    const [zipLat, setZipLat] = useState()
    const [zipLon, setZipLon] = useState();
    const [darkParkList, setDarkParkList] = useState<DarkPark[]>([]);
    
    // loop through list to calculate distant from returned lon/lat and put in an array
    for (let i = 0; i <= darkParkList.length; i++) {
        
    }


    useEffect(() => {
        getParkList().then(res => setDarkParkList(res));
    },[])
    return (
        <>
            <form>
                <label htmlFor="search">
                    <input name="search" id="search" type="text" onChange={(e) => {
                        if(e.target.value.length == 5) {
                            LongLat.forEach(array => {
                                if(array[0] == e.target.value) {
                                setZipLat(array[1]);
                                setZipLon(array[2]);
                                console.log(zipLat);
                                console.log(zipLon);
                        }
                    })
                }
                }}/>
                </label>
                <button type="submit">Search</button>
            </form>
            <div>
                <h2>Park List</h2>
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