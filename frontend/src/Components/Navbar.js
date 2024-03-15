import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
import "../Style/Navbar.css";
import { useSelector } from "react-redux";
function Navbar() {
  const item = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <img src={Logo} alt="" />
      <div className="navInfo">
        <ul>
          <li>
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navLink">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="navLink">
              Services
            </Link>
          </li>
          <li>
            <Link to="/product" className="navLink">
              Product
            </Link>
          </li>
          <li>
            <Link to="/trainer" className="navLink">
              Trainer
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="navLink">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navLink">
              Contact
            </Link>
          </li>
        </ul>
        <ul>
          <Link className="navLink" to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>{item.length}</span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
