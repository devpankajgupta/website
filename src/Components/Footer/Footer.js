import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <div
        className={classes.grid2}
        style={{
          backgroundImage: `url("./images/reservation-parallax.jpg")`,
        }}
      >
        <div className={classes.box}>
          <div>
            <h3 className="subHeading">Book Your Tiffin</h3>
            <h2 className="heading">ENQUIRE NOW</h2>
            <div className={classes.input6}>
              <input type="text" placeholder="Full Name"></input>
              <input type="number" placeholder="Enter Your Phone Number"></input>
            </div>
            <div className={classes.input6}>
              <input type="text" placeholder="Your Email"></input>
              <input type="text" placeholder="Location"></input>
            </div>
            <div className={classes.input6}>
              <input type="number" placeholder="No of Meals"></input>
              <input type="text" placeholder="Lunch / Dinner"></input>
            </div>
            <div className={classes.input6}>
              <input type="date" placeholder="Start Service"></input>
              <input type="Submit" value={"Enquiry Now"}></input>
            </div>
          </div>
        </div>
        <div>Map</div>
      </div>
      <div className={classes.footer}>
        <p>You can also call/whatsapp to make an enquiry.</p>
        <h2>+91 - 99873 94444 | 99679 54444</h2>
      </div>
      <div className={classes.footer}>2022 Jagannath's Kitchen All rights reserved. Designed by Web Maison</div>
    </div>
  );
}

export default Footer;
