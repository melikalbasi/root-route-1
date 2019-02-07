import React, { Component } from "react";
import API from "../utils/API";
import PathCard from "../components/Cards/PathCard";

const style ={
  PathHeader:{
    textAlign: "center"
  }
}

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
          <div style={style.PathHeader} className="PathHeader">
          <h1>Welcome to Root Route, membername!</h1> <hr/>
          <h3>Pick a path to get started!</h3>
          </div>
        {this.state.paths.map(path => (
          
          <PathCard path={path}></PathCard>
        ))}
      </div>
    );
  }
}

export default Paths;