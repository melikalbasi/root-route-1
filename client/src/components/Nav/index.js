import React, { Component } from "react";
import "./nav.css";
import { withRouter } from "react-router";
import axios from "axios";


class Nav extends Component {

  render() {
    return (

      <nav className="navbar">
{this.props.user ? 
  <a href="/paths">
          <span>Root Route</span>
        </a> : <span>Root Route</span>
}
        {this.props.user ? 
          <a onClick={() => this.props.handleSignOut()}>Sign out</a> : null}
        
      </nav>

    )
  }
}

export default withRouter(Nav);