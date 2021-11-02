import React from 'react';
import './App.css';
import Container from './components/Container';
import DarkParkDetails from './components/DarkParkDetails';
import Header from './components/Header';
import Homepage from './components/Homepage';



function App() {
  return (
    <div className="App">
      <Container />
      {/* <Homepage/>
      <DarkParkDetails /> Adding this component here just to see the display of the image from the api */}
      
    </div>
  );
}

export default App;
