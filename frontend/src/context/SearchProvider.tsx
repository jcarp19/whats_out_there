import React, {ReactNode, useState, createContext} from "react";
import WeatherInterface from "../models/WeatherInterface";
import DarkPark from "../models/DarkPark";
import { getSetWeather, getWeatherByLocation } from "../services/GetWeather";

export interface SearchProps {
    searchLat: any,
    setSearchLat: any,
    searchLon: any,
    setSearchLon: any
          
}

export interface FunctionsProps {
  
    loadWeatherByLocation:(lat: any, lon: any) => void;
    searchInputs: SearchProps[];
}

const defaultValues: FunctionsProps = {
   
    loadWeatherByLocation: () => {},
    searchInputs: []
}



export const SearchContext = React.createContext<FunctionsProps>(defaultValues);

export const SearchProvider = ({children}: {children: ReactNode}) => {
    const [searchLat, setSearchLat] = useState<any>();
    const[searchLon, setSearchLon] = useState<any>();
    const[weather, setWeather] = useState<WeatherInterface>()
    const[searchInputs, setSearchInputs] = useState<SearchProps[]>([])

   
    function loadWeatherByLocation(lat: any, lon: any) {
        return getWeatherByLocation(lat, lon).then(res => setWeather(res))
    }

    return (
        <SearchContext.Provider 
        value={{
            // searchLat,
            // setSearchLat,
            // searchLon,
            // setSearchLon,
          
            loadWeatherByLocation,
            searchInputs
            
        }}>
       {children}
        </SearchContext.Provider>
    )


};