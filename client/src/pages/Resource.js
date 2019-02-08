import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import ResourceCard from "../components/Cards/ResourceCard";
// import ReviewForm from "../components/Review/";

const style={
  ResourceHeader:{
    textAlign:"center",
    padding: 20,
    paddingBottom: 40
  }
}

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
          <div className="ResourceHeader" style={style.ResourceHeader}>
          <h3>Click any course to start mastering skills</h3>
          </div>

        {this.state.resources.map(resource => (

          <ResourceCard
            resource={resource}
            innerLink={`/paths/${this.props.match.params.pathid}/subjects/${this.props.match.params.subjectid}`}
            user={this.state.user}
          >
          </ResourceCard>
        ))}
        </div>
    );
  }
}




export default Resource;
