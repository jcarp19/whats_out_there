import React, {ReactNode, useState, createContext} from "react";
import WeatherInterface from "../models/WeatherInterface";
import DarkPark from "../models/DarkPark";
import { getSetWeather, getWeatherByLocation } from "../services/GetWeather";

export interface SearchProps {
    searchLat: any,
    searchLon: any,
    // setSearchLat: () => void,
    // setSearchLon: () => void,          
}

export interface FunctionsProps {
    searchLat: any,
    searchLon: any, 
    // setSearchLat:() => void,
    // setSearchLon:() => void,
    loadWeatherByLocation:(lat: any, lon: any) => void;
    searchInputs: SearchProps[];
}

const defaultValues: FunctionsProps = {
    searchLat: "42.33",
    searchLon: "-83.04", 
    // setSearchLat:() => {},
    // setSearchLon:() => {},
    loadWeatherByLocation: () => {},
    searchInputs: []
}



export const SearchContext = React.createContext<FunctionsProps>(defaultValues);

export const SearchProvider = ({children}: {children: ReactNode}) => {
    const [searchLat, setSearchLat] = useState<SearchProps>();
    const[searchLon, setSearchLon] = useState<SearchProps>();
    const[weather, setWeather] = useState<WeatherInterface>()
    const[searchInputs, setSearchInputs] = useState<SearchProps[]>([{searchLat: "42.33", searchLon:"-83.04"}])

   
    function loadWeatherByLocation({searchLat, searchLon}: SearchProps) {
        return getWeatherByLocation(searchLat, searchLon).then(res => setWeather(res))
    }

    return (
        <SearchContext.Provider 
        value={{
            // searchLat,
            // setSearchLat,
            // searchLon,
        
          
            loadWeatherByLocation,
            searchInputs,
            searchLat,
            searchLon,
            
        }}>
       {children}
        </SearchContext.Provider>
    )


};