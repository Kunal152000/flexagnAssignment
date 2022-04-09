import React from "react";
import navImg from "../../assets/img3.PNG";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="navbar-left">
        <img src={navImg} alt="navimg" className="nav-img" />
      </div>

      <div className="navbar-right">
        <input type="checkbox" id="click" />
        <label for="click" className="menu-hamburger">
          <i className="fas fa-bars"></i>
        </label>
        <ul className="navbar-list">
          <li className=" navbar-item home">Home</li>
          <li className="navbar-item about-link">
            <a href="#aboutus">About Us</a>
          </li>
          <li className="navbar-item">Pricing</li>
          <li className="navbar-item">Teacher Login</li>
          <li className="navbar-item">Parent Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
