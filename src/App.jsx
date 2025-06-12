import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
}
  from 'react-router-dom'
import Menu from "./Components/Menu/menu";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Weather from "./Pages/Weather";
import Register from "./Pages/Register";

export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutPage" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>

  )
}