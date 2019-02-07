import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Paths from "./pages/Paths";
import NoMatch from "./pages/NoMatch";
import Subject from "./pages/Subjects";
import Resource from "./pages/Resource";
import LandingPage from "./pages/LandingPage";
import Nav from "./components/Nav";
import axios from "axios";


class App extends Component {



  state = {
    user: "",
    isLoggedIn: false
  }


  async componentDidMount() {
    let allData = await axios.get("/protected")
    let loggedIn = false;
    if (allData.data && allData.data.email.length > 0) {
      loggedIn = true;
    }

    this.setState({
      user: allData.data,
      isLoggedIn: loggedIn
    })
  }

  render() {
    const {
      isLoggedIn, user
    } = this.state
    let loggedInCheck = null;
    if (isLoggedIn) {
      loggedInCheck = (<h1>Logged In!</h1>)
    }
    return (
      <Router>
        <div>

          <Nav user={user} isLoggedIn={isLoggedIn} />

          {/* {loggedInCheck} */}
          <Switch>
            {/* THANKS to https://tylermcginnis.com/react-router-pass-props-to-components/ */}
            <Route
              exact path="/"
              render={(props) => <LandingPage {...props} user={user} isLoggedIn={isLoggedIn} />}
            />

            {this.state.isLoggedIn && <Route
              exact path="/paths"
              render={(props) => <Paths {...props} user={user} isLoggedIn={isLoggedIn} />}
            />}

            {this.state.isLoggedIn && <Route
              exact path="/paths/:pathid"
              render={(props) => <Subject {...props} user={user} isLoggedIn={isLoggedIn} />}
            />}

            {this.state.isLoggedIn && <Route
              exact path="/paths/:pathid/subjects/:subjectid"
              render={(props) => <Resource {...props} user={user} isLoggedIn={isLoggedIn} />}
            />}

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
