import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <h2 className="logo">UrbanNest</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#overview">About</a></li>
        <li><a href="#amenities">Amenities</a></li>
        <li><a href="#connectivity">Connectivity</a></li>
        <li><a href="#floor-plans">Floor Plans</a></li>
        <li><a href="#developer">Developer</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      <button className="nav-btn">Enquire</button>

    </nav>
  );
};

export default Navbar;
