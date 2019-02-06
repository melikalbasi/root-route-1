import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
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
      .then(allData => this.setState({ paths: allData.data }))
      .catch(err => console.log(err));
  };
  
  render() {
    
      return (
        <div>
        <Jumbotron />
        <h1 className="PickPathText">Roots</h1>
        {this.state.paths.map(path => (
          <PathCard path={path}></PathCard>
        ))}
      </div>
    );
  }
}

export default Paths;