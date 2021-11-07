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
      <h2 aria-label="addH2" role="H2" className="park-list-headline">Full Dark Park List</h2>

      {darkParkList.map((data, index) => {
        console.log(data);
        return (
          <div key={index} className="info-card">
            {/* <p>{data._id}</p> */}
            <p className="park-list-name"><a href={data.url} target="_blank">{data.name}</a></p>
            <p>{data.state}</p>
            <p>Light Pollution: {data.lightPollution}</p>
            <p>Is Camping Available?: {data.camping}</p>
            <p>Fee: {data.fee}</p>
            <p>{data.description}</p>
            <details>
              <summary>Click for Full Address</summary>
              <p>Address: {data.address}</p>
            </details>
          </div>
        )
      })}

    </div>
  )
  
}
