import React, { useEffect, useState, useContext } from "react";
import DarkPark, {filteredParks} from "../models/DarkPark";
import {LongLat} from "../models/LongLat";
import getParkList from "../services/GetParkList";

// useContext stuff
import { SearchContext, SearchProps } from "../context/SearchProvider";


export default function DarkParkSearch() {
    // receive zip code from form
    // make sure it's on the list. If not return an err message
    // return lon/lat , 
    const [zipLat, setZipLat] = useState(42.33);
    const [zipLon, setZipLon] = useState(-83.04);
    const [darkParkList, setDarkParkList] = useState<DarkPark[]>([]);
    // useContext stuff. Object containing searchLat, searchLon etc.
    const {searchInputs, loadWeatherByLocation} = useContext(SearchContext);
    const [filteredParks, setFilteredParks] = useState<filteredParks[]>([]);

    // const[searchLatLon, setSearchLatLon] = useState<SearchProps>({searchLat: zipLat, searchLon: zipLon});
    
    
    useEffect(() => {
        getParkList().then(function(res) {
            {res.map((data) => {
                let pLat = data.latlong[0];
                let pLon = data.latlong[1];
                let zLat = zipLat;
                let zLon = zipLon;
                
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
                    // return solution;
    
                    return data.miles = solution;
                    
                }
                // Converts numeric degrees to radians
                function toRad(Value:number) 
                {
                    return Value * Math.PI / 180;
                }
               calcDistance(zLat, zLon, pLat, pLon);
            })}
            setDarkParkList(res);
        });
    },[zipLat])
    
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
                    (document.querySelector(".hidden") as HTMLButtonElement).style.display = "block";
                    
                }
                }>Search</button>
            </form>
            <div  className="park-list hidden">
                <h2 className="park-list-headline">Dark Parks Near You</h2>
                

                {darkParkList.sort((a, b) => a.miles - b.miles ).map((data, index) => {
                    return (
                        <div key={index} className="park-list-item">
                            <p className="park-list-name"><a href={data.url} target="_blank">{data.name}</a></p>
                            <p>{data.state}</p>
                            <p>{data.description}</p>
                            <p>{data.miles} miles from your location.</p>
                        </div>
                    )
                }).slice(0, 10)}
            </div>
        </>
    )
    
}
