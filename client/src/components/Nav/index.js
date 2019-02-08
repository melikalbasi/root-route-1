import React from "react";
import "./nav.css";

function Nav(props) {
  return (
    <nav className="navbar">

      <a href="/paths">
        <span><img style={{backgroundColor:"transparent", filter: "brightness(0) invert(1)", height:40, width:"auto"}} src="https://files.slack.com/files-pri/TCA754D6Z-FG11R5FPD/rootroute.png"></img></span>
      </a>
      {/* <a href="/">
      <h1>Welcome to Root Route, {this.state.user.name}!</h1>
      </a> */}
      <a className="navlink" href="/dashboard">
        <span>Sign Out</span>
      </a>
    </nav>
  );
}

export default Nav;
