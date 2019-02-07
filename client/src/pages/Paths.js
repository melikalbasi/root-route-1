import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import PathCard from "../components/Cards/PathCard";

class Paths extends Component {
  state = {
    paths: [],
    user: this.props.user
  };

  componentDidMount() {
    // Parsing user info for reference
    console.log("USERNAME IN PATHS", this.state.user.name);
    console.log("USEREMAIL IN PATHS", this.state.user.email);
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
        <h1 className="PickPathText">Paths</h1>
        {this.state.paths.map(path => (
          <PathCard 
            path={path} 
            user={this.state.user}
          />
        ))}
      </div>
    );
  }
}

export default Paths;