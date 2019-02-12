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
            <span> 
              <img style={{ backgroundColor: "transparent", filter: "brightness(0) invert(1)", height: 40, width: "auto" }} src="https://i.imgur.com/e62cVoo.png"></img>
              </span>
          </a> : <span>
            <img style={{ backgroundColor: "transparent", filter: "brightness(0) invert(1)", height: 40, width: "auto" }} src="https://i.imgur.com/e62cVoo.png"></img>
            </span>
        }

        {this.props.user ?
        <span>
        Welcome to Root Route, {this.props.user.name}!
      </span> : null

      }

        {this.props.user ?
          <a onClick={() => this.props.handleSignOut()}>Sign out</a> : null}

      </nav>

    )
  }
}

export default withRouter(Nav);