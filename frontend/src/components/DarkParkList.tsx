// park list would already be set closest to furthest based on zipcode entered on homepage. (pass zipcode as props)
// this page would include another zipcode search so the user can look up more than one location.
// use case (example): if you live in detroit but plan on taking a trip to Arizona.
// list and define dark park designations (maybe put sources here too)
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import WeatherRoute from "../routes/WeatherRoute";
import DarkParkSearch from "./DarkParkSearch";
import DarkPark from "../models/DarkPark";
import getParkList from "../services/GetParkList";
import darkpark1 from "../images/darkpark1.jpg";



export default function DarkParkList(): any {

  const [darkParkList, setDarkParkList] = useState<DarkPark[]>([]);
  useEffect(() => {

    loadParkList();
  }, [])
  function loadParkList() {
    getParkList().then(res => {
      setDarkParkList(res);
    })
  }

  return (
    <div>
      <DarkParkSearch />

      {/* dark park pic above the list: */}
      {/* <div className="addParkListPic">
        <img className="parkListPic" src={darkpark1} alt="image of stars in the blue sky" />
      </div> */}

      { /* dark park background image */}
      <div className="park-list" style={{ backgroundImage: `url(${darkpark1})` }}>
        <h2 aria-label="addH2" role="H2" className="park-list-headline">Full Dark Park List</h2>

        {darkParkList.map((data, index) => {
          console.log(data);
          return (
            <div key={index} className="info-card park-list-card">
              {/* <p>{data._id}</p> */}
              <p className="park-list-name"><a href={data.url} target="_blank">{data.name}</a></p>
              <p>{data.state}</p>
              <p><strong>Light Pollution:</strong> {data.lightPollution}</p>
              <p><strong>Is Camping Available?:</strong> {data.camping}</p>
              <p><strong>Fee:</strong> {data.fee}</p>
              <p>{data.description}</p>
              <details>
                <summary>Click for Full Address</summary>
                <p><strong>Address:</strong> {data.address}</p>

                {/* https://maps.google.com/?ll=latitude,longitude */}
                {/* <Link to={{ pathname: `https://maps.google.com/?ll=${data.latlong[0]}${data.latlong[1]}` }} target="_blank" /> */}
                {/* <p>{data.latlong}</p> */}
              </details>
            </div>
          )
        })}

      </div>

    </div>
  )


}
