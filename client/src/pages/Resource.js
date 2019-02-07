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
    review: "",
    reviews: [],
    error: ""
  };

  componentDidMount() {
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
          >
          </ResourceCard>
        ))}
        </div>
    );
  }
}




export default Resource;
