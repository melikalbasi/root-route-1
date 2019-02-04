import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import PathCard from "../components/Cards/PathCard";

class Paths extends Component {
  state = {
    paths: [],
  };

  componentDidMount() {
    this.loadPaths();
  }

  loadPaths = () => {
    API.getPaths()
      .then(allData => this.setState({ paths: allData.data}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>PATHS IN THE ROOT ROUTE</h1>
        </Jumbotron>
        {this.state.paths.map(path => (
          <PathCard path={path}></PathCard>
        ))}
      </div>
    );
  }
}

export default Paths;