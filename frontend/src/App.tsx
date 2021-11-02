import React from 'react';
import './App.css';
import DarkParkDetails from './components/DarkParkDetails';
import Header from './components/Header';
import Homepage from './components/Homepage';
import {SearchProvider} from "./context/SearchProvider";


function App() {
  return (
    <div className="App">
      <SearchProvider>
      <Header/>
      <Homepage/>
      <DarkParkDetails /> {/* Adding this component here just to see the display of the image from the api */}
      </SearchProvider>
    </div>
  );
}

export default App;
