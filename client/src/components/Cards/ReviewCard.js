import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import ResourceCard from "../components/Cards/ResourceCard";
// import ReviewForm from "../components/Review/";

class ReviewCard extends Component {
  state = {
    // contains all reviews associated with the card
    reviews: [],
  };

  componentDidMount() {
    API.getReviews(this.props.match.params.pathid, this.props.match.params.subjectid)
      .then(res => this.setState({ resources: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
          {this.state.reviews.map(review => (
              console.log(review)
          ))}
      </div>
    );
  }
}

export default ReviewCard;
