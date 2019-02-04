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

  handleInputChange = event => {
    this.setState({ review: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.submitReview(this.props.match.params.pathid, this.props.match.params.subjectid, this.state.review)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ reviews: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>RESOURCES</h1>
        </Jumbotron>
        {this.state.resources.map(resource => (
          <div>
            <ResourceCard 
              resource={resource}
              link={`/paths/${this.props.match.params.pathid}/subjects/${this.props.match.params.subjectid}`}
            >
            
            </ResourceCard>
            {/* <ReviewForm resource={resource}></ReviewForm> */}
          </div>
        ))}
      </div>
    );
  }
}

export default Resource;
