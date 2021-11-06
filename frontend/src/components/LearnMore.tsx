import { useState, useEffect } from "react"
import NASAInterface from "../models/NASAInterface";
import GetNASAPic from "../services/GetNASA"
import "./LearnMore.css"; 




export default function LearnMore() {
    const [picURL, setPicURL] = useState<NASAInterface>();
    
    useEffect(() => {
        loadPicURL();
    }, [])

    function loadPicURL() {
        GetNASAPic().then(res => setPicURL(res));
    }
    return (
        
        <div className = "BackgroundImage">
            <div aria-label = "addDiv" role = "Div" className="park-detail-container" style={{backgroundImage: `url(${picURL?.url})`}}></div>
            <h1 aria-label = "h1" role = "addh1">Learn More about our Parks</h1>
            <p>Below lists the Designations from the International Dark-Sky Association</p>
            <p>We added in parks recommened by astronomers and photographers where you can witness some spectacular star gazing</p>
            
            <blockquote cite="https://www.darksky.org/our-work/conservation/idsp/become-a-dark-sky-place/">
            Terms and Definitions for Eligibility for Dark Sky Park Level: 
            
            Eligibility: 

            The eligibility of sites for participation in the International Dark Sky Places program depends on the category of the designation sought.
            Communities: Must have some type of legal organization that is officially recognized by outside groups. This can be in the form of a town, city, municipality or other legally organized community (such as an urban neighborhood or subdivisions). There is no night sky quality criterion associated with this category.
            Parks: Must be public or private land, accessible to the public in part or whole, that is legally protected for scientific, natural, educational, cultural, heritage and/or public enjoyment purposes. The core area must provide an exceptional dark sky resource, relative to the communities and cities that surround it, where the night sky brightness is routinely equal to or darker than 21.2 magnitudes per square arc second.
            Reserves:  Must be  public or private land of at least 700 km², accessible to the public in part or whole, that is legally protected for scientific, natural, educational, cultural, heritage and/or public enjoyment purposes. The core area must provide an exceptional dark sky resource, relative to the communities and cities that surround it, where the night sky brightness is routinely equal to or darker than 20 magnitudes per square arc second.
            Sanctuaries: Must be public or private land, accessible to the public in part or whole, that is legally protected for scientific, natural, educational, cultural, heritage and/or public enjoyment purposes. The site must provide an exceptional dark sky resource where the night sky brightness is routinely equal to or darker than 21.5 magnitudes per square arc second

            Urban Night Sky Places: Must be a municipal park, open space, observing site, or other similar property, accessible to the public in part or whole, 
            located within the region enclosed by a perimeter extending 50 km beyond the edge of the continuously-built area of a municipality with a permanent population of 
            10,000 or more people within its territorial jurisdiction, 
            or 50,000 or more people if defined as a “metro area” of two or more adjoining municipalities. 
            There is no night sky quality criterion associated with this category.
            </blockquote>

            <h2>Tips for Star Gazing</h2>
            <div>
            <ul>
                <li>
                    Frist Tip: Get up to a high point with less view obstruction. 
                </li>
                <li>
                    Second Tip: Wait to buy a telescope, first buy some Binoculars. 
                </li>
                <li>
                    Third Tip: Do your research know when to look where you want the Moon to be in the waxing or waning phase. To witness the details of the moon and its craters. To see the stars look when the moon is in a crescent (when the moon is very thin and barely there) and gibbous phase(When the moon is not present).
                </li>
            </ul>
            </div> 
            <h3>Sources</h3>

            <ul>
                <li>
                    <a href="https://darksitefinder.com/dark-sites/list-of-dark-sites/">Source: dark site finder</a>
                </li>
                <li>
                    <a href=" https://www.darksky.org/our-work/conservation/idsp/parks/">Source: dark sky conservation</a>
                   
                </li>
            </ul>


            <img src="" alt=""/>
            <img src="" alt=""/>


        </div>
    )
}


