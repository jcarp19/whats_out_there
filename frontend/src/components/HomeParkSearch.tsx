import telescope_Right from "../images/telescope_Right.svg"
import telescope_Left from "../images/telescope_Left.svg"
import { useEffect, useState, useContext } from "react";
import DarkPark, { Comments, filteredParks } from "../models/DarkPark";
import { LongLat } from "../models/LongLat";
import getParkList from "../services/GetParkList";
import { WeatherInterface } from "../models/WeatherInterface";
import { getSetWeather, getWeekForecast } from "../services/GetWeather";
import { upDateOne } from "../services/GetParkList";
// useContext stuff
import { SearchContext } from "../context/SearchProvider";
import AuthContext from "../context/AuthContext";
import Header from "./Header";
import NavbarWeather from "./NavbarWeather";



export default function HomeParkSearch() {
    // receive zip code from form
    // make sure it's on the list. If not return an err message
    // return lon/lat , 
    const { user } = useContext(AuthContext);
    const { searchInputs } = useContext(SearchContext);
    const [zipLat, setZipLat] = useState(searchInputs[0].searchLat);
    const [zipLon, setZipLon] = useState(searchInputs[0].searchLon);
    const [darkParkList, setDarkParkList] = useState<DarkPark[]>([]);
    const [weather, setWeather] = useState<WeatherInterface>();
    const [forecast, setForecast] = useState<WeatherInterface>();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<Comments[]>([])
    const [numParks, setNumParks] = useState(0);


    let star1: HTMLElement = document.getElementById("star-rating1")!;
    let star2: HTMLElement = document.getElementById("star-rating2")!;
    let star3: HTMLElement = document.getElementById("star-rating3")!;
    let star4: HTMLElement = document.getElementById("star-rating4")!;
    let star5: HTMLElement = document.getElementById("star-rating5")!;



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
        getWeekForecast(zipLat, zipLon).then((res) => setForecast(res));

    }, [zipLat])

    function reloadParkList() {
        getParkList().then(res => setDarkParkList([...darkParkList]));
    }

    function addComment(id: any, newComment: any) {
        upDateOne(id, newComment).then(res => comments.push(res));
    }


    return (
        <main>

            {/* THIS IS THE NAVBAR AND WEATHER */}
            <NavbarWeather weather={weather} />


            {/* THIS IS THE HEADER */}
            <Header />

            <div className="welcomeP_searchForm">
                <p aria-label="addP" role="Paragraph" className="welcome_p">Welcome! Have ever wondered of whats out there in the cosmos?
                    Do you want to find a place where you can relax and enjoy the night sky to see
                    an immense amount of stars and enjoy the scenery? Well this is the website for you!
                    Click "Learn more" to get more information about our site and where you can find these
                    majestic places. Your adventure is only one click away!
                </p>
                <div className="park-search">
                    <form aria-label="addForm" role="Form" className="park-search-form">
                        <h2 className="park-search-headline">Enter your zip to find parks near you.</h2>
                        <label className="park-search-label" aria-label="addLabel" role="Label" htmlFor="search"></label>
                        <input className="park-search-zip" name="search" id="search" type="text" placeholder="Enter Your Zip" onChange={(e) => {
                            if (e.target.value.length == 5) {
                                //setNumParks(10);

                                LongLat.forEach(array => {
                                    if (array[0] == e.target.value) {
                                        setZipLat(array[1]);
                                        setZipLon(array[2]);
                                    }

                                })
                                searchInputs.unshift({ searchLat: zipLat, searchLon: zipLon, hasSearched: true });
                                console.log(searchInputs)

                            }
                        }} />
                        <button className="park-search-button" aria-label="addButton" role="Button" type="submit" onClick={(e) => {
                            e.preventDefault();
                            setNumParks(10)
                            console.log(zipLat);
                            console.log(zipLon);
                            let searchLatLon = { searchLat: zipLat, searchLon: zipLon, hasSearched: true };
                            searchInputs.unshift(searchLatLon);
                        }
                        }>Search</button>
                    </form>
                </div>
            </div>


            <div className="park-list">
                {/* <h2 aria-label="addH2" role="H2" className="park-list-headline">Dark Parks Near You</h2> */}
                {darkParkList.sort((a, b) => a.miles - b.miles).map((data, index) => {
                    return (
                        <div key={index} className="info-card home-card">

                            <p className="park-list-name"><a href={data.url} target="_blank">{data.name}</a></p>
                            <p>{data.state}</p>
                            <p>{data.description}</p>
                            <p>{data.miles} miles from your location.</p>

                            <a href={data.url} target="_blank" className="more-details-link">More Details</a>
                            {/* Comment Form below */}
                            <details onClick={() => {

                                setComments(data.comments);
                                for (let i = 0; i < document.querySelectorAll("details").length; i++) {
                                if (document.querySelectorAll("details")[i].open) {
                                    if (i != index) {
                                        document.querySelectorAll("details")[i].removeAttribute("open")
                                    }
                                }
                            }}}>
                                <summary><span className="leaveRatingComment_h2">Click to Leave a Rating and Comment</span></summary>
                                <form method="PUT" id="comment-form" className="info-card comment-form" onSubmit={(e) => {
                                    e.preventDefault();
                                    if (user?.displayName != null) {
                                        var userName = user?.displayName
                                    } else {
                                        var userName = "Anonymous"
                                    }
                                    if (user?.photoURL != null) {
                                        var photoURL = user?.photoURL
                                    } else {
                                        var photoURL = "none"
                                    }
                                    let newComment: Comments = { rating, comment, userName, photoURL };
                                    // testing to see if pushing would refresh the page, it did not
                                    let newComments = [...data.comments]
                                    upDateOne(data._id, newComment).then(res => comments.push(res))
                                    // setComments(newComments)
                                    setComments(data.comments)

                                    setRating(0);
                                    setComment("");
                                    getParkList().then(res => setDarkParkList([...darkParkList]));

                                }}>
                                    {/* <label htmlFor="rating">Rating:</label>
                                    <input placeholder="rating" className="ratingInput" type="number" max="10" min="1" name="rating" onChange={(e) => { setRating(e.target.valueAsNumber) }}></input> index <= rating ? target.classList.add("clicked") : target.classList.add("")*/}
                                    <div className="rating">
                                        <span>Rating: </span>
                                        < ul className="rating-list">
                                            {[...Array(5)].map((star, index) => {
                                                index += 1;
                                                return (
                                                    <li key={index} className={index <= rating ? "clicked" : "star"} onClick={(e) => { e.preventDefault(); var target = e.target as Element; setRating(index); }}><i className="fas fa-star star5"></i></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <label htmlFor="comment">Comment:</label>
                                    <input placeholder="comment" value={comment} className="commentInput" type="text" name="comment" onChange={(e) => { setComment(e.target.value) }}></input>

                                    <button className="btn-submit-commit" type="submit" onClick={() => {
                                        // setRating(starRating);
                                        console.log(rating);
                                        console.log(comment);
                                        
                                    }}>
                                        Submit Comment
                                    </button>
                                </form>
                                <div className="comments-container">{comments.map((comment, index) => {
                                    function assignImage(index: any) {
                                        if (comment.photoURL == undefined || comment.photoURL == "none") {
                                            if (index % 2 === 0) {
                                                let img = telescope_Right;
                                                return img;
                                            } else {
                                                let img = telescope_Left;
                                                return img;
                                            }
                                        } else {
                                            let img = comment.photoURL;
                                            return img
                                        }
                                    }
                                    return (
                                        <div key={index} className="comment-div">
                                            <img src={assignImage(index)} alt="telescope icon" className="telescope_img comment-img" />
                                            <div className="info-card comment-card comment-list">
                                                <ul className="rating-list">
                                                    {[...Array(5)].map((star, index) => {
                                                        index += 1;
                                                        return (
                                                            <li key={index} id="star-rating2" className={index <= comment.rating ? "clicked" : "star"}><i className="fas fa-star star5"></i></li>
                                                        )
                                                    })}

                                                </ul>
                                                <p>"{comment.comment}"</p>
                                                <p>-{comment.userName}</p>
                                            </div>
                                        </div>
                                    )
                                    
                                }).reverse()}</div>

                               
                            </details>
                        </div>

                    )
                }).slice(0, numParks)}
            </div>
        </main >
    )

}