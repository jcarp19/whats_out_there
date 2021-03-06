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
        <div aria-label = "addDiv" role = "Div" className="park-detail-container" style={{backgroundImage: `url(${picURL?.url})`}}>
            <h1 aria-label = "addH1" role = "H1">Park Detail</h1>

            <p aria-label = "addP" role = "Paragraph">Welcome to Whats Out there? Have ever wondered of whats out there in the cosmos?
                Do you want to find a place where you can relax and enjoy the night sky to see 
                an immense amount of stars and enjoy the scenery? Well this is the website for you!.
                Click "Learn more" to get more information about the various parks where you can find these
                majestic places. 
            </p>
            <p aria-label = "addP2" role = "P2">Your adventure is only one click away!</p>
            <a aria-label = "addAnchor" role = "Anchor" href="Learn More">Learn More</a>

        </div>
    )
}