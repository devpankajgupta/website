import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";
import classes from "./About.module.css";

function About() {
  return (
    <div id="about">
      <NavBar />
      <h2 className="heading">ABOUT US</h2>
      <p className="subHeading">
        Restoring authenticity to food from the ground up is the missioin that drives us. "Maa - K- Hath Jaisa Khana.
      </p>
      <div className={classes.aboutParent}>
        <div>
          <img src="./images/tiffin.webp" width={"100%"}></img>
        </div>
        <div>
          <h2 className={classes.aboutTitle}>Gorment bdhdh</h2>
          <p>
            Jagannath’s kitchen was started to merge the wisdom of the Vedas that pay tribute to the inherent
            spirituality that exemplifies Indian cooking. We just didn’t want to be another veg Tiffin service in Mumbai
            that only provides home food; but we also wanted to give our customers the feel of, "maa ke haath ka khana"
            with our dishes that are healthy for both physical and mental well being, delicious and uplifting. We love
            to take our customers back to the warmth of a mother’s love by serving fresh, organic, locally sourced,
            dishes cooked according to Vedic customs.
          </p>
          <p>
            We believe it’s our duty as vegetarian Tiffin service provider in Mumbai is to deliver fresh, hygienic meals
            and most importantly taste with every bite. Our staff is dedicated to satisfying your cravings for great
            food that will uplift your body, mind, and spirit!
          </p>
          <p>
            Jagannath's Kitchen today has grown from a small lunch box service in Mumbai to a service provider that can
            accommodate and cater to anything or anyone. Be it lunch boxes, Tiffin service, any workplace function or
            private event – we will work with you in every step to make your dining experience pleasurable and
            worry-free. We work with you on your menu selection to ensure the dishes are a perfect fit for your special
            occasion.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
