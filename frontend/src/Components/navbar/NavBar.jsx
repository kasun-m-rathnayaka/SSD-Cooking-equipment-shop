import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" />
        <div className="title">SSD Cooking Equipment (PVT) Ltd</div>
      </div>
      <div className="end">
        <div className="profile">
          <img src="user.png" alt="" srcset="" />
          <div>admin</div>
        </div>
        <Link to={"/"}>
          <div className="logout">
            <img src="logout.png" alt="" />
            Logout
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
