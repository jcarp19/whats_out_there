// this would have the tab navigation to house news, dark parks list, and potentially fun nasa apis and a star chart widget.
// user could enter zipcode here and we can use the input for the weather conditions and set the dark park list.
import fence from "../images/fence.png";


export default function Homepage() {
    return (
        <main>
            <img src={fence} alt="fence with night sky in the background." className="fence_pic"/>
        </main>
    )
}