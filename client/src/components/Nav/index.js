import React, { Component } from "react";
import "./nav.css";
import { withRouter } from "react-router";
import axios from "axios";


class Nav extends Component {

  render() {
    return (

      <nav className="navbar">

        <a href="/paths">
          <span>Root Route</span>
        </a>
        
          <a onClick={() => this.props.handleSignOut()}>Sign out</a>
        
      </nav>

    )
  }
}

export default withRouter(Nav);