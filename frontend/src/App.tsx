import React, { useContext } from 'react';
import './App.css';
import Container from './components/Container';
import DarkParkDetails from './components/DarkParkDetails';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { SearchProvider } from "./context/SearchProvider";
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from "react-router-dom";
import NewsFeed from './components/NewsFeed';
import NewsFeedAll from './components/NewsFeedAll';
import LearnMore from './components/LearnMore';
import DarkParkList from './components/DarkParkList';
import DarkParkSearch from './components/DarkParkSearch';




function App() {
  
  return (

    <SearchProvider>
      <div className="App">
        {/* <Header /> */}
        <Router>
          {/* <nav className="navbar">
            <ul>
              <li><NavLink to="/" style={{textDecoration: "none"}}><p className="navbar_p">Home</p></NavLink></li>
              <li><NavLink to="/learnmore" style={{textDecoration: "none"}}><p className="navbar_p">Learn More</p></NavLink></li>
              <li><NavLink to="/news" style={{textDecoration: "none"}}><p className="navbar_p">News</p></NavLink></li>
              <li><NavLink to="/darkparklist" style={{textDecoration: "none"}}><p className="navbar_p">Park List</p></NavLink></li>
            </ul>
          </nav> */}
          <Switch>
            <Route path="/news" exact>
              <NewsFeedAll />
            </Route>
            <Route path="/learnmore" exact>
              <LearnMore />
            </Route>
            <Route path="/darkparklist" exact>
              <DarkParkList />
            </Route>
            <Route path="/" exact>
              <Container />
              {/* <Homepage /> */}
            </Route>
          </Switch>
        </Router>

        {/* <Homepage/>
      <DarkParkDetails /> Adding this component here just to see the display of the image from the api */}
      </div>
    </SearchProvider>
  );
}

export default App;
