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
        console.log(allData)
        // this.setState({ paths: allData.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
            <Jumbotron>
              <h1>PATHS IN THE ROOT ROUTE</h1>
            </Jumbotron>
            {this.state.paths.length ? (
              <List>
                {this.state.paths.map(path => (
                  <ListItem key={path.id}>
                    <Link to={"/paths/" + path.id}>
                    <strong>
                        {path.name}
                      </strong>
                      <p>
                          {path.description}
                      </p>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>
    );
  }
}

export default Paths;
