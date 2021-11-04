// this would have the tab navigation to house news, dark parks list, and potentially fun nasa apis and a star chart widget.
// user could enter zipcode here and we can use the input for the weather conditions and set the dark park list.
import fence from "../images/fence.png";
import DarkParkSearch from "../components/DarkParkSearch";
import NewsRoute from "../routes/NewsRoute";

export default function Homepage() {

    return (
        <>
            <main>
                <img src={fence} alt="fence with night sky in the background." className="fence_pic" />
                <h1 className="homepage_h1">What's Out There?</h1>
                <DarkParkSearch />
                <NewsRoute />
            </main>

        </>
    )
}