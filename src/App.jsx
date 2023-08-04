import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/order" element={<OrderForm />}></Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
