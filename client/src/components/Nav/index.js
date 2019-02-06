import React from "react";
import "./nav.css";

function Nav(props) {
  return (
    <nav className="navbar">

      <a className="navlink" href="/">
        <span>Root Route</span>
      </a>
          <a className="navlink" href="/paths">
        <span>Paths</span>
      </a>
    <p>
      Welcome, {props.user.name}!
    </p>

    </nav>
  );
}

export default Nav;
