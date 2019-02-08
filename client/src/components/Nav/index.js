import React from "react";
import "./nav.css";

function Nav(props) {
  return (
    <nav className="navbar">

      <a href="/paths">
        <span>Root Route</span>
      </a>
      <a className="navlink" href="/dashboard">
        <span>Sign Out</span>
      </a>
    </nav>
  );
}

export default Nav;
