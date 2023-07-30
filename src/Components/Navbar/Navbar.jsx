import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/657/657723.png"
          alt=""
          className="logo"
        />
        <div>Sambat</div>
      </div>

      <div className="mid">✦Home✦</div>

      <div className="right">
        <div>Menu</div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3665/3665949.png"
          alt=""
          srcset=""
          className="logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
