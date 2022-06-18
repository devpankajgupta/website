import React from "react";
import NavBar from "../Nav/NavBar";
import classes from "./CaseStudy.module.css";

function CaseStudy(props) {
  return (
    <div>
      <NavBar />
      <div className={classes.grid2}>
        <div className={classes.red}>Graph</div>
        <div className={classes.yellow}>Table</div>
      </div>
    </div>
  );
}

export default CaseStudy;
