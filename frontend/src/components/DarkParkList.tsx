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

    
    

    
    return (
        <div>
            <DarkParkSearch/>
            <h1>DarkParkList Page!</h1>

            
        </div>
    )

}

