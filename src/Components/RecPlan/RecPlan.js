import React from "react";
import classes from "./RecPlan.module.css";

function RecPlan() {
  return (
    <div
      className={classes.cPadding}
      style={{
        background: "#e8870d",
      }}
    >
      <div className={classes.plan}>
        <h2 className="heading">RECOMMENDED MEAL PLAN</h2>
        <p className="subHeading">
          Restoring authenticity to food from the ground up is the missioin that drives us. Tiffin Service is the
          realization of a dream.
        </p>
        <div className={classes.grid}>
          <div className={classes.card}>
            <img width={"100%"} src="./images/plan2.jpeg"></img>
            <h4>Full Meal (Rs. 3000/- / 20 meals) </h4>
            <button>Order now</button>
          </div>
          <div className={classes.card}>
            <img width={"100%"} src="./images/plan.jpeg"></img>
            <h4>Full Meal (Rs. 3000/- / 20 meals) </h4>
            <button>Order now</button>
          </div>
          <div className={classes.card}>
            <img width={"100%"} src="./images/plan3.jpeg"></img>
            <h4>Full Meal (Rs. 3000/- / 20 meals) </h4>
            <button>Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecPlan;
