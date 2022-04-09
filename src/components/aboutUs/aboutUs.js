import React from "react";
import "./aboutUs.css";
import AboutCard from "./aboutcard/card";
import aboutImg from "../../assets/img2.PNG";
const AboutUs = () => {
  return (
    <div id="aboutus">
      <div className="aboutus-container-top">
        <div className="about-right">
          <p className="abouthead">About Us</p>
          <h3>
            Flexagn is designed to make daily learning intutive , self-driven,
            and fun!
          </h3>
          <p className="aboutpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            cupiditate esse maxime quam, possimus natus officiis voluptates
            minima qui officia illo? Aliquam similique amet iusto magni
            consequatur beatae quibusdam, sed aliquid temporibus laborum at.
            Deserunt temporibus sint tempore, explicabo suscipit ad possimus
            rerum! Ipsum Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste atque et esse non amet explicabo, minima fugit,
            distinctio culpa quas alias maxime. Eveniet pariatur, odit numquam
            illo dolorum in adipisci voluptatibus beatae nobis dolor delectus
            nulla recusandae minus quo provident suscipit porro nemo,
            perferendis aliquid et rem voluptate iste! Quia?
          </p>
        </div>
        <div className="about-left">
          <div className="aboutimg">
            <img src={aboutImg} alt="aboutimg" />
          </div>
        </div>
      </div>
      <div className="aboutus-container-bottom">
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </div>
  );
};

export default AboutUs;
