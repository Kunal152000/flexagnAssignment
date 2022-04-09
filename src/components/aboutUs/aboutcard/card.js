import React, { useState } from "react";
import cardImg from "../../../assets/aboutimage.jpg";
import "./card.css";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Card = () => {
  const [showcontent1, setShowContent1] = useState(false);
  return (
    <div className="aboutCard">
      <img
        src={cardImg}
        alt="cardimg"
        className="aboutcardimage"
        onMouseEnter={() => setShowContent1(true)}
        onMouseLeave={() => setShowContent1(false)}
      />
      <p>ALexander Gomez</p>
      <div className={`cardcontent ${showcontent1 ? "hide" : ""}`}>
        <div className="icons">
          <div className="facebookicon">
            <BsFacebook />
          </div>
          <div className="twittericon">
            <BsTwitter />
          </div>
          <div className="instaicon">
            <AiFillInstagram />
          </div>
          <div className="linkedinicon">
            <BsLinkedin />
          </div>
        </div>
        <p className="cardpara">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          eveniet eum quaerat doloremque voluptatum cum provident dolores
        </p>
      </div>
    </div>
  );
};

export default Card;
