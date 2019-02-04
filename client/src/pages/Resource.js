import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List } from "../components/List";
import ResourceCard from "../components/Cards/ResourceCard";

class Resource extends Component {
  state = {
    resources: []
  };


  componentDidMount() {
    console.log("=====pathid=====")
    console.log(this.props.match.params.pathid)
    console.log("=====subjectid=====")
    console.log(this.props.match.params.subjectid)
    API.getResources(this.props.match.params.pathid, this.props.match.params.subjectid)
      .then(res => this.setState({ resources: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
            <Jumbotron>
              <h1>RESOURCES</h1>
            </Jumbotron>
              <List>
                {this.state.resources.map(resource => (
                  <ResourceCard resource = {resource}></ResourceCard>
                ))}
              </List>
      </div>
    );
  }
}

export default Resource;
