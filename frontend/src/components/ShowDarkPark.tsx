import DarkPark from "../models/DarkPark"

export default function ShowDarkPark({ _id, name, title, state, lightPollution, camping, fee, address, latlong, url, description, miles, comments }: DarkPark) {
    return (
        <div>
            <p>{title}</p>
            <p>{state}</p>
            <p>{description}</p>
        </div>
    )
}