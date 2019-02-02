import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";

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
        console.log(allData, "This is allData in Paths.js")
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
              <List>
                {this.state.paths.map(path => (
                  <ListItem key={path.id}>
                    <Link to={"/paths/" + path.id}>
                    <h2>
                        {path.name}
                      </h2>
                      <p>
                        {path.description}
                      </p>
                      <img src={path.image} alt={path.name} style={{height: 50}}></img>
                    </Link>
                  </ListItem>
                ))}
              </List>
      </div>
    );
  }
}

export default Paths;
