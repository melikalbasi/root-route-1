import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import ResourceCard from "../components/Cards/ResourceCard";

class Resource extends Component {
  state = {
    resources: [],
    user: this.props.user
  };

  componentDidMount() {
    console.log("USERNAME IN RESOURCES", this.state.user.name);
    console.log("USEREMAIL IN RESOURCES", this.state.user.email);
    API.getResources(this.props.match.params.pathid, this.props.match.params.subjectid)
      .then(res => this.setState({ resources: res.data }))
      .catch(err => console.log(err));
  }

  render() {

    return (
      <div>
        <Jumbotron />
        <h1>Username: {this.state.user.name}</h1>
        <h1>User Email: {this.state.user.email}</h1>
        <h1 className="PickPathText">Resources</h1>
        <div class="row">
        {this.state.resources.map(resource => (

          <ResourceCard
            resource={resource}
            innerLink={`/paths/${this.props.match.params.pathid}/subjects/${this.props.match.params.subjectid}`}
            user={this.state.user}
          >
          </ResourceCard>
        ))}
        </div>
      </div>
    );
  }
}

export default Resource;
