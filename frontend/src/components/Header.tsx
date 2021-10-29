// current weather conditions bar goes here.
// maybe logo goes here as well?
// TO DO: make route to weather api

import telescope from "../images/telescope.svg"

export default function Header() {
    return (
        <header>
           <img src={telescope} alt="icon of telescope" className="logo_pic"/>
        </header>
    )
}