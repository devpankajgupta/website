import React, { useRef, useState } from "react";
import NavBar from "./Components/Nav/NavBar";
import Home from "./Components/Home/Home";
import CaseStudy from "./Components/CaseStudy/CaseStudy";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./Components/About/About";
import MealPlan from "./Components/MealPlan/MealPlan";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  // var option;

  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<CaseStudy />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/meal-plan" element={<MealPlan />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
