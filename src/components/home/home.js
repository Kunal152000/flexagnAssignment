import React from "react";
import "./home.css";
import playstore from "../../assets/download.png";
import applestore from "../../assets/apple.png";
import homeimg from "../../assets/img.PNG";

const Home = () => {
  return (
    <div id="home">
      <div className="homeleft">
        <p className="home-para1">
          Felxagn is a global learning platform that brings kid together through
          play.
        </p>
        <p className="home-para2">Download our app</p>
        <div className="download-img">
          <div className="playstore">
            <a href="https://play.google.com/store/apps/details?id=com.fastlabz.flexagn">
              <img src={playstore} alt="playstore-img" width="150" />
            </a>
          </div>
          <div className="appstore">
            <img src={applestore} alt="applestore-img" width="120" />
          </div>
        </div>
      </div>
      <div className="home-right">
        <div className="home-img">
          <img src={homeimg} alt="home-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
