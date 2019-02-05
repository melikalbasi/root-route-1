import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav className="navbar">

      <a href="/">
        <span>Root Route</span>
      </a>
      <a className="navlink" href="/passport">
        {/* ternary statement */}
        <span>Login</span>
      </a>
      <a className="navlink" href="/profile">
        <span>Community</span>
      </a>
      <a className="navlink" href="/dashboard">
        <span>Dashboard</span>
      </a>

    </nav>
  );
}

export default Nav;
