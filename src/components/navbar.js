import React from "react";
import "./navbar.css";
import logo from "../assets/imgs/shahid.png";

const Navbar = () => {
  return (
    <div class="navbar">
      <div>
        <img class="logo" src={logo} />
      </div>
    </div>
  );
};

export default Navbar;
