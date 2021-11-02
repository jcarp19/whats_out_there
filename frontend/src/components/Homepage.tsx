// this would have the tab navigation to house news, dark parks list, and potentially fun nasa apis and a star chart widget.
// user could enter zipcode here and we can use the input for the weather conditions and set the dark park list.
import fence from "../images/fence.png";
import DarkParkSearch from "../components/DarkParkSearch";

<<<<<<< HEAD
export default function Homepage() {
    
=======
export default function Homepage() {  

>>>>>>> 1cf980ddee5cbda315ac6235d25c7164ff203089
    return (
        <>
        <main>
            <img src={fence} alt="fence with night sky in the background." className="fence_pic"/>
            <h1 className="homepage_h1">What's Out There?</h1>
            <DarkParkSearch />
        </main>
 
    </>
    )
}