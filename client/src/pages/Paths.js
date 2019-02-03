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
      .then(allData =>
        this.setState({ paths: allData.data}, () => {
          console.log("paths", this.state.paths)
        }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
            <Jumbotron>
              <h1>PATHS IN THE ROOT ROUTE</h1>
            </Jumbotron>
              {/* <List style={{height:"1000px"}}> */}
                {this.state.paths.map(path => (
                  <PathCard path = {path}></PathCard>
                  
                ))}
              {/* </List> */}
      </div>
    );
  }
}

export default Paths;