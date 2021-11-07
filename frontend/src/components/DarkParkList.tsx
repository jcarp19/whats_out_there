// park list would already be set closest to furthest based on zipcode entered on homepage. (pass zipcode as props)
// this page would include another zipcode search so the user can look up more than one location.
// use case (example): if you live in detroit but plan on taking a trip to Arizona.
// list and define dark park designations (maybe put sources here too)
import React, { useEffect, useState, useContext } from "react";
import DarkPark, {filteredParks} from "../models/DarkPark";
import getParkList from "../services/GetParkList";
import DarkParkSearch from "./DarkParkSearch";
import { SearchContext, SearchProps } from "../context/SearchProvider";
import WeatherInterface from "../models/WeatherInterface";
import { getSetWeather } from "../services/GetWeather";

export default function DarkParkList() {

    // const [zipLat, setZipLat] = useState(42.33);
    // const [zipLon, setZipLon] = useState(-83.04);
    // const [darkParkList, setDarkParkList] = useState<DarkPark[]>([]);
    // // useContext stuff. Object containing searchLat, searchLon etc.
    // const {searchInputs, loadWeatherByLocation} = useContext(SearchContext);
    // const [filteredParks, setFilteredParks] = useState<filteredParks[]>([]);
    // const[weather, setWeather] = useState<WeatherInterface>();


    // useEffect(() => {
    //     getParkList().then(function(res) {
    //         {res.map((data) => {
    //             let pLat = data.latlong[0];
    //             let pLon = data.latlong[1];
    //             let zLat = zipLat;
    //             let zLon = zipLon;
                
    //             function calcDistance(zLat:number, zLon:number, pLat:number, pLon:number) {
    //                 var R = 6371; // km
    //                 var dLat = toRad(pLat-zLat);
    //                 var dLon = toRad(pLon-zLon);
    //                 var lat1 = toRad(zLat);
    //                 var lat2 = toRad(pLat);
                
    //                 var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    //                     Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    //                 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    //                 var d = R * c;
    //                 // return Math.round(d * .621371); // convert the km to miles
    //                 var solution = Math.round(d * .621371); // convert the km to miles
    //                 // return solution;
    
    //                 return data.miles = solution;
                    
    //             }
    //             // Converts numeric degrees to radians
    //             function toRad(Value:number) 
    //             {
    //                 return Value * Math.PI / 180;
    //             }
    //            calcDistance(zLat, zLon, pLat, pLon);
    //         })}
    //         setDarkParkList(res);
    //     });

    //     getSetWeather(zipLat, zipLon).then(res => setWeather(res));
  
     
    // },[zipLat])
    
    // function formatWeather() {
    //     let timeZone = weather?.timezone;
        
    //         timeZone = timeZone?.replace("America/", "")
    //         timeZone = timeZone?.replace("_", " ")
    //      return timeZone;
        
    

    
    return (
        <div>
            <DarkParkSearch/>
            <h1>DarkParkList Page!</h1>

            
        </div>
    )

}

