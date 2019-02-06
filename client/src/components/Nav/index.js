import React from "react";

function Nav(props) {
  return (
    <nav className="navbar">
      <a href="/">
        Root Route
      </a>
    <p>
      Welcome, {props.user.name}!
    </p>
    </nav>
  );
}

export default Nav;
