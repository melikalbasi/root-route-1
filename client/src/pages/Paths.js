import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import Cards_paths from "../components/Cards/Cards_paths";

class Paths extends Component {
  state = {
    paths: [],
  };

  componentDidMount() {
    this.loadPaths();
  }

  loadPaths = () => {
    API.getPaths()
      .then(allData => {
        this.setState({ paths: allData.data})
      })
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
                  <Cards_paths path = {path}></Cards_paths>
                  
                ))}
              {/* </List> */}
      </div>
    );
  }
}

export default Paths;
