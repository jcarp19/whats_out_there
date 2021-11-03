import React, { useEffect, useState, useContext } from "react";
import DarkPark from "../models/DarkPark";
import {LongLat} from "../models/LongLat";
import getParkList from "../services/GetParkList";
// useContext stuff
import { SearchContext, SearchProps } from "../context/SearchProvider";


export default function DarkParkSearch() {
    // receive zip code from form
    // make sure it's on the list. If not return an err message
    // return lon/lat , 
    const [zipLat, setZipLat] = useState("00601");
    const [zipLon, setZipLon] = useState(0);
    const [darkParkList, setDarkParkList] = useState<DarkPark[]>([]);
    // useContext stuff. Object containing searchLat, searchLon etc.
    const {searchInputs, loadWeatherByLocation} = useContext(SearchContext);
    // const[searchLatLon, setSearchLatLon] = useState<SearchProps>({searchLat: zipLat, searchLon: zipLon});
    
    
    useEffect(() => {
        getParkList().then(res => setDarkParkList(res));
    },[])

    // onsubmit function to set "search" object using zipLat, zipLon (should be available globally after submit)
    // function handleSubmit(lat: any, lon: any){
    //     loadWeatherByLocation(lat, lon)
    // }
    for (let i = 0; i <= darkParkList.length; i++) {
        
    }

    
    return (
        <>
            <form onSubmit={(e) => { console.log(searchInputs); loadWeatherByLocation(searchInputs[0].searchLat, searchInputs[0].searchLon);}}>
                <label htmlFor="search">
                    <input name="search" id="search" type="text" onChange={(e) => {
                        if(e.target.value.length == 5) {
                            LongLat.forEach(array => {
                                if(array[0] == e.target.value) {
                                setZipLat(array[1]);
                                setZipLon(array[2]);
                                
                                // console.log(zipLat);
                                // console.log(zipLon);
                            }
                    })
                }
                }}/>
                </label>
                <button type="submit" onClick={(e) => {
                    e.preventDefault(); 
                    console.log(zipLat); 
                    console.log(zipLon);
                    let searchLatLon = {searchLat: zipLat, searchLon: zipLon};
                    searchInputs.unshift(searchLatLon);
                    console.log(searchLatLon);
                    
                }
                }>Search</button>
            </form>
            <div>
                <h2>Filtered Park List</h2>
                {darkParkList?.map((data, index) => {
                    // console.log(darkParkList);
                    return (
                        <div key={index}>
                            <p>{data.name}</p>
                            <p>{data.state}</p>
                            <p>{data.description}</p>
                            <p>{data.latlong?.map((loc, index) => {
                                return (
                                    <div key={index}>
                                        <p>Park: {loc}</p>
                                    </div>
                                )
                            })}</p>
                            
                            <p>Zip Lat: {zipLat}</p>
                            <p>Zip Lon: {zipLon}</p>
                        </div>
                        )
                })}
            </div>
            <div>
                <h2>Full Park List</h2>
                {darkParkList?.map((park, index) => {
                    return (
                        <div key={index}>
                            <p>{park.name}</p>
                            <p>{park.state}</p>
                            <p>{park.description}</p>
                            <p>{park.latlong[0]}</p>
                        </div>
                    )
            })}</div>
        </>
    )
    
}
