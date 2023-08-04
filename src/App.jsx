import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import Jumbotron from "./components/JumboTron";
import JumbotronExample from "./components/JumbotronExample";

function App() {
  return (
    <React.Fragment>      
      <NavBar></NavBar>        
        <Routes>
          <Route path="/" element></Route>
          <Route path="/" element></Route>
        </Routes>          
    </React.Fragment>
  );
}

export default App;
