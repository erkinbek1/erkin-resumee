import React from "react";
import "../Navbar/Navbar.css";
import image1 from "../IMAGES/icons8-logo-150.png";
import image2 from "../IMAGES/burger-menu.png";

const Navbar = () => {
  return (
    <div>
      {/* NAVBAR START */}
      <nav class="nav__container">
        <img src={image1} alt="logo error" />
        <div class="nav__container_info">
          <p>About me</p>
          <p>Hobbies</p>
          <p>Contacts</p>
          <p>Location</p>
        </div>
        <div class="nav__container_btn">
          <button>Call</button>
          <button>Mail</button>
        </div>
        <div class="nav__container_burger">
          <img src={image2} alt="burger error" />
        </div>
      </nav>
      {/* NAVBAR END */}
    </div>
  );
};

export default Navbar;
