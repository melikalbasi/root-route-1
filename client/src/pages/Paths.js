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
      .then(allData =>
        // this.setState({ paths: allData.dataValues })
        console.log(allData[0].dataValues))
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
                    </Link>
                  </ListItem>
                ))}
              </List>
      </div>
    );
  }
}

export default Paths;
