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
    const [zipLat, setZipLat] = useState(0);
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
                {darkParkList.map((data, index) => {
                    // console.log(darkParkList);
                    let parkLat:number = data.latlong[0];
                    let parkLon:number = data.latlong[1];
                    
                    function calcDistance(zLat:number, zLon:number, pLat:number, pLon:number) {
                        var R = 6371; // km
                        var dLat = toRad(pLat-zLat);
                        var dLon = toRad(pLon-zLon);
                        var lat1 = toRad(zLat);
                        var lat2 = toRad(pLat);
                    
                        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
                        var d = R * c;
                        // return Math.round(d * .621371); // convert the km to miles
                        var solution = Math.round(d * .621371); // convert the km to miles
                        return solution;
                    }
                    
                    // Converts numeric degrees to radians
                    function toRad(Value:number) 
                    {
                        return Value * Math.PI / 180;
                    }
                    let filteredParks = [];
                    filteredParks.push({name: data.name, state: data.state, desc: data.description, miles: calcDistance(zipLat, zipLon, parkLat, parkLon)})
                    console.log(filteredParks);

                    console.log(filteredParks.sort((a, b) => a.miles - b.miles));
                    console.log(darkParkList)

                    return (
                    filteredParks.map((park2, index) => {
                        return (
                            <div key={index}>
                                <p>{park2.name}</p>
                                <p>{park2.state}</p>
                                <p>{park2.desc}</p>
                                <p>Miles from your area: {park2.miles}</p>
                            </div>
                        )
                    })
                       
                        // <div key={index}>
                        //     <p>{data.name}</p>
                        //     <p>{data.state}</p>
                        //     <p>{data.description}</p>
                        //     <p>{calcDistance(zipLat, zipLon, parkLat, parkLon)} Miles from your area.</p>
                        // </div>
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
