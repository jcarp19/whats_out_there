import React, { useEffect, useState, useContext } from "react";
import DarkPark from "../models/DarkPark";
import {LongLat} from "../models/LongLat";
import getParkList from "../services/GetParkList";
// useContext stuff
import { SearchContext } from "../context/SearchProvider";

export default function DarkParkSearch() {
    // receive zip code from form
    // make sure it's on the list. If not return an err message
    // return lon/lat , 
    const [zipLat, setZipLat] = useState("00601");
    const [zipLon, setZipLon] = useState(0);
    const [darkParkList, setDarkParkList] = useState<DarkPark[]>([]);
    // useContext stuff. Object containing searchLat, searchLon etc.
    const {searchParks,
        loadWeatherByLocation,
        searchInputs} = useContext(SearchContext);
    
    useEffect(() => {
        getParkList().then(res => setDarkParkList(res));
    },[])

    // onsubmit function to set "search" object using zipLat, zipLon (should be available globally after submit)
    function handleSubmit(lat: any, lon: any){
        loadWeatherByLocation(lat, lon)
    }
    
    return (
        <>
            <form onSubmit={(e) => {e.preventDefault(); handleSubmit(zipLat, zipLon);}}>
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
                <button type="submit"
                onClick={(e) => {e.preventDefault(); console.log(zipLat); console.log(zipLon)}}
                >Search</button>
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