import Homepage from "../components/Homepage";
import DarkParkDetails from "../components/DarkParkDetails";
import Header from "../components/Header";

export default function Container() {
    return (
    <>  
        <Header />
        <Homepage/>
        <DarkParkDetails /> {/* Adding this component here just to see the display of the image from the api */}
    </>
    ) 
}