// this page has the background set from the nasa astronomy pic of the day API.
// this page list all the details of the park and allows the user to leave a rating and comment.
// TO DO: make route to NASA APOD API
import { useState, useEffect } from "react";
import NASAInterface from "../models/NASAInterface";
import GetNASAPic from "../services/GetNASA"
import "./DarkParkDetails.css";

export default function DarkParkDetails() {
    const [picURL, setPicURL] = useState<NASAInterface>();
    
    useEffect(() => {
        loadPicURL();
    }, [])

    function loadPicURL() {
        GetNASAPic().then(res => setPicURL(res));
    }

    return (
        <div className="park-detail-container" style={{backgroundImage: `url(${picURL?.url})`}}>
            <h1>Park Detail</h1>
        </div>
    )
}