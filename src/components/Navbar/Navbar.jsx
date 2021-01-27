import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo"></img>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-menu-item">
            <Link to="/" className="nav-menu-item-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link
              to="/profile"
              className="nav-menu-item-links"
              onClick={closeMobileMenu}
            >
              Settings
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link
              to="/contact-us"
              className="nav-menu-item-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          
        </ul>
  
      </nav>
    </>
  );
}
export default Navbar;
