import React, { useEffect, useState, useContext } from "react";
import DarkPark, { filteredParks } from "../models/DarkPark";
import { LongLat } from "../models/LongLat";
import getParkList from "../services/GetParkList";
import WeatherInterface from "../models/WeatherInterface";
import { getSetWeather } from "../services/GetWeather";
import { Router, NavLink } from "react-router-dom"

// useContext stuff
import { SearchContext, SearchProps } from "../context/SearchProvider";
import Header from "./Header";


export default function DarkParkSearch() {
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

        getSetWeather(zipLat, zipLon).then(res => setWeather(res));


    }, [zipLat])

    function formatWeather() {
        let timeZone = weather?.timezone;

        timeZone = timeZone?.replace("America/", "")
        timeZone = timeZone?.replace("_", " ")
        return timeZone;

    }

    // function updateList (shoutout: ShoutOutInterface) {
    //     addShoutOut(shoutout).then(res => setShoutOutList([...shoutOutList, res]))
    // }

    return (
        <>

            <nav className="navbar">
                <ul>
                    <li><NavLink to="/" style={{ textDecoration: "none" }}><p className="navbar_p">Home</p></NavLink></li>
                    <li><NavLink to="/learnmore" style={{ textDecoration: "none" }}><p className="navbar_p">Learn More</p></NavLink></li>
                    <li><NavLink to="/news" style={{ textDecoration: "none" }}><p className="navbar_p">News</p></NavLink></li>
                    <li><NavLink to="/darkparklist" style={{ textDecoration: "none" }}><p className="navbar_p">Park List</p></NavLink></li>
                </ul>
            </nav>


            <div className="weather_route_div">
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



            <form aria-label="addForm" role="Form" onSubmit={(e) => { console.log(searchInputs); }}>
                <label aria-label="addLabel" role="Label" htmlFor="search">
                    <input name="search" id="search" type="text" onChange={(e) => {
                        if (e.target.value.length == 5) {
                            LongLat.forEach(array => {
                                if (array[0] == e.target.value) {
                                    setZipLat(array[1]);
                                    setZipLon(array[2]);
                                }

                                // let searchLatLon = {searchLat: zipLat, searchLon: zipLon, hasSearched: true};
                                searchInputs.unshift({ searchLat: zipLat, searchLon: zipLon, hasSearched: true });


                            })
                        }
                    }} />
                </label>
                <button aria-label="addButton" role="Button" type="submit" onClick={(e) => {
                    e.preventDefault();
                    console.log(zipLat);
                    console.log(zipLon);
                    // if(searchInputs[0].hasSearched == false) {
                    //     let searchLatLon = {searchLat: zipLat, searchLon: zipLon, hasSearched: true};
                    //     searchInputs.unshift(searchLatLon);
                    //     console.log(searchLatLon);
                    // } else {
                    //     let searchLatLon = {searchLat: zipLat, searchLon: zipLon, hasSearched: false};
                    //     searchInputs.unshift(searchLatLon);
                    //     console.log(searchLatLon);
                    // }

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
                        </div>
                    )
                }).slice(0, 10)}


                {/* <Form className="form" method="POST" onSubmit={(e) => {e.preventDefault();
          let newShoutOut:ShoutOutInterface = {toName, fromName, message};
          addNewShoutOut(newShoutOut);
          setFromName('');
          setToName('');
          setMessage('');
        }}>
        <h2 className="leaveShoutOut">Leave a Shout Out</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>To</Form.Label>
          <Form.Control type="text" className="formInput" value={toName}
          onChange={(e) => {setToName(e.target.value)}}
          />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>From</Form.Label>
          <Form.Control type="text" className="formInput" value={fromName}
          onChange={(e) => {setFromName(e.target.value)}}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Shout Out</Form.Label>
          <Form.Control as="textarea" style={{height: '100px'}} value={message}
          onChange={(e) => {setMessage(e.target.value)}}
          />
        </Form.Group>
        <Button variant="primary" type="submit" 
        className="submitButton" >
          Submit Shout Out
        </Button>
      </Form> */}


            </div>
        </>
    )

}
