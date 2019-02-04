import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import ResourceCard from "../components/Cards/ResourceCard";
// import ReviewForm from "../components/Review/";

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
        <Jumbotron>
          <h1>RESOURCES</h1>
        </Jumbotron>
        {this.state.resources.map(resource => (
      
            <ResourceCard 
              resource={resource}
              innerLink={`/paths/${this.props.match.params.pathid}/subjects/${this.props.match.params.subjectid}`}
            >
            </ResourceCard>
          </div>
        ))}
      </div>
    );
  }
}

export default Resource;
