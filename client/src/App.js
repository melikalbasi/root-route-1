import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Paths from "./pages/Paths";
import NoMatch from "./pages/NoMatch";
import Subject from "./pages/Subjects";
import Resource from "./pages/Resource";
import Nav from "./components/Nav";
import axios from "axios";


class App extends Component {

  state = {
    user: "",
    isLoggedIn: false
  }

  componentDidMount() {
    axios.get("/protected")
      .then(allData => {
       let loggedIn = false;
          if (allData.data.email.length > 0) {
            loggedIn = true;
          } 
      
        this.setState({
          user: allData.data,
          isLoggedIn: loggedIn
        })
      })
      .catch(err => console.log(err));
  }

  render() {

    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Paths} />
            <Route exact path="/paths" component={Paths} />
            <Route exact path="/paths/:pathid" component={Subject} />
            <Route exact path="/paths/:pathid/subjects/:subjectid" component={Resource} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
