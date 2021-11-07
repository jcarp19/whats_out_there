



import React, { useEffect, useState, useContext } from "react";
import DarkPark, { Comments, filteredParks } from "../models/DarkPark";
import { LongLat } from "../models/LongLat";
import getParkList from "../services/GetParkList";
import WeatherInterface from "../models/WeatherInterface";
import { getSetWeather } from "../services/GetWeather";
import { Router, NavLink } from "react-router-dom"

// useContext stuff
import { SearchContext, SearchProps } from "../context/SearchProvider";
import Header from "./Header";


export default function HomeParkSearch() {
    // receive zip code from form
    // make sure it's on the list. If not return an err message
    // return lon/lat , 
    const [zipLat, setZipLat] = useState(42.33);
    const [zipLon, setZipLon] = useState(-83.04);
    const [darkParkList, setDarkParkList] = useState<DarkPark[]>([]);
    // useContext stuff. Object containing searchLat, searchLon etc.
    const { searchInputs, loadWeatherByLocation } = useContext(SearchContext);
    const [filteredParks, setFilteredParks] = useState<filteredParks[]>([]);
    const [weather, setWeather] = useState<WeatherInterface>();
    const [rating, setRating] = useState<Comments>();
    const [comment, setComment] = useState<Comments>();


    // const[searchLatLon, setSearchLatLon] = useState<SearchProps>({searchLat: zipLat, searchLon: zipLon});


    useEffect(() => {
        getParkList().then(function (res) {
            {
                res.map((data) => {
                    let pLat = data.latlong[0];
                    let pLon = data.latlong[1];
                    let zLat = zipLat;
                    let zLon = zipLon;

                    function calcDistance(zLat: number, zLon: number, pLat: number, pLon: number) {
                        var R = 6371; // km
                        var dLat = toRad(pLat - zLat);
                        var dLon = toRad(pLon - zLon);
                        var lat1 = toRad(zLat);
                        var lat2 = toRad(pLat);

                        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                        var d = R * c;
                        // return Math.round(d * .621371); // convert the km to miles
                        var solution = Math.round(d * .621371); // convert the km to miles
                        // return solution;

                        return data.miles = solution;

                    }
                    // Converts numeric degrees to radians
                    function toRad(Value: number) {
                        return Value * Math.PI / 180;
                    }
                    calcDistance(zLat, zLon, pLat, pLon);
                })
            }
            setDarkParkList(res);
        });

        console.log(searchInputs[0]);
        getSetWeather(zipLat, zipLon).then(res => setWeather(res));

    }, [zipLat])

    function formatWeather() {
        let timeZone = weather?.timezone;
        timeZone = timeZone?.replace("America/", "")
        timeZone = timeZone?.replace("_", " ")
        return timeZone;

    }

    return (
        <>
            <div className="desktop-wrap_nav_weather">
                <nav className="navbar_home">
                    <ul>
                        <li><NavLink to="/" style={{ textDecoration: "none" }}><p className="navbar_p_home">Home</p></NavLink></li>
                        <li><NavLink to="/learnmore" style={{ textDecoration: "none" }}><p className="navbar_p_home">Learn More</p></NavLink></li>
                        <li><NavLink to="/news" style={{ textDecoration: "none" }}><p className="navbar_p_home">News</p></NavLink></li>
                        <li><NavLink to="/darkparklist" style={{ textDecoration: "none" }}><p className="navbar_p_home">Park List</p></NavLink></li>
                    </ul>
                </nav>


                <div className="weather_route_div_home">
                    <div className="timezone_and_conditions_div">
                        {/* Shows timezone. Automatically set to 'America/Detroit' until changed. */}
                        <h3 className="timezone_h3">
                            <div className="timezone_text">Time Zone: </div>
                            {formatWeather()}</h3>

                        {/* Grabs a small description of current weather conditions (example: moderate rain) */}
                        <p className="weather_conditions_p">
                            <p className="conditions_text"> Conditions: </p>
                            {weather?.current.weather[0].description}</p>
                    </div>


                    <div className="temp_icon_details_div">
                        {/* temperature */}
                        <p className="temp_p">{weather?.current.temp}°</p>
                        {/* Icon representing weather */}
                        <img className="weather_icon_img" src={"http://openweathermap.org/img/wn/" + weather?.current.weather[0].icon + "@2x.png"} alt='icon representing weather conditions' />
                        {/* link to see 7-day forescast and more details */}
                        <p className="weather_info_p">&#9432;</p>
                    </div>
                </div>
            </div>


            <Header />

            <p aria-label="addP" role="Paragraph" className="welcome_p">Welcome! Have ever wondered of whats out there in the cosmos?
                Do you want to find a place where you can relax and enjoy the night sky to see
                an immense amount of stars and enjoy the scenery? Well this is the website for you!
                Click "Learn more" to get more information about our site and where you can find these
                majestic places. Your adventure is only one click away!
            </p>


            <form aria-label="addForm" role="Form" >
                <label aria-label="addLabel" role="Label" htmlFor="search">
                    <input name="search" id="search" type="text" onChange={(e) => {
                        if (e.target.value.length == 5) {
                            LongLat.forEach(array => {
                                if (array[0] == e.target.value) {
                                    setZipLat(array[1]);
                                    setZipLon(array[2]);
                                }

                            })
                            searchInputs.unshift({ searchLat: zipLat, searchLon: zipLon, hasSearched: true });
                            // console.log(searchInputs)

                        }
                    }} />
                </label>
                <button aria-label="addButton" role="Button" type="submit" onClick={(e) => {
                    e.preventDefault();
                    console.log(zipLat);
                    console.log(zipLon);
                    let searchLatLon = { searchLat: zipLat, searchLon: zipLon, hasSearched: true };
                    searchInputs.unshift(searchLatLon);

                    (document.querySelector(".hidden") as HTMLButtonElement).style.display = "block";

                }
                }>Search</button>
            </form>
            <div className="park-list hidden">
                <h2 aria-label="addH2" role="H2" className="park-list-headline">Dark Parks Near You</h2>


                {darkParkList.sort((a, b) => a.miles - b.miles).map((data, index) => {
                    return (
                        <div key={index} className="info-card">
                            <p>{data._id}</p>
                            <p className="park-list-name"><a href={data.url} target="_blank">{data.name}</a></p>
                            <p>{data.state}</p>
                            <p>{data.description}</p>
                            <p>{data.miles} miles from your location.</p>
                            {/* <form method="POST" onSubmit={(e) => {
                                e.preventDefault();
                                let newComment:Comments = {rating, comment};
                                function updateList (newComment: Comments) {
                                    updateOne(newComment).then(res => setDarkParkList([...darkParkList, res]))
                                    setRating('');
                                    setComment('');
                                }}>
                                <h2 className="leaveShoutOut">Leave a Rating and Comment</h2>
                                
                                <label>To<label>
                                <input type="text"></input>
                            
                                
                                <label>From<label>
                                <input type="text"></input>
                                
                                
                                
                            
                                <button type="submit">
                                Submit Comment
                                </button>
                            </form> */}
                        </div>
                    )
                }).slice(0, 10)}
            </div>
        </>
    )

}
