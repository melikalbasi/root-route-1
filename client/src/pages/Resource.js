import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

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
              <h1>SUBJECTS</h1>
            </Jumbotron>
              <List>
                {this.state.resources.map(resource => (
                  <ListItem key={resource.id}>
                    <Link to={`/paths/${this.props.match.params.pathid}/subjects/${this.props.match.params.subjectid}`}>
                    <h2>
                        {resource.name}
                      </h2>
                      <p>
                        {resource.description}
                      </p>
                      <img src={resource.image} alt={resource.name} style={{height: 50}}></img>
                    </Link>
                  </ListItem>
                ))}
              </List>
      </div>
    );
  }
}

export default Resource;
