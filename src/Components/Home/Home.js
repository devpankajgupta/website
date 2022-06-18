import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";
import RecPlan from "../RecPlan/RecPlan";
import HomeAbout from "./HomeAbout";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={classes.relative}>
        <img width={"100%"} src="./images/01_preview1600x800 (1).jpg"></img>
        <h2>PANAKKAKAK</h2>
      </div>
      <HomeAbout />
      <RecPlan />
      <Footer />
    </div>
  );
};

export default Home;
