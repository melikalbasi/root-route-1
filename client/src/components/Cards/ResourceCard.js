import React, { Component } from "react";
import API from "../../utils/API";
import ReviewCard from "./ReviewCard";
import ReviewForm from "../Review"
// import { Link } from "react-router-dom";

const style = {
    image: {
        height: 100,
    }
};

class ResourceCard extends Component {

    state = {
        id: this.props.resource.id,
        name: this.props.resource.name,
        link: this.props.resource.link,
        image: this.props.resource.image,
        description: this.props.resource.description,
        reviewContent: "",
        reviews: [],
        error: "",
        innerLink: this.props.innerLink,
        reviewsDisplayed: true,
        user: this.props.user
    };

    componentDidMount() {
        this.loadReviews(this.state.id);
    }

    loadReviews = resourceid => {
        API.getReviews(resourceid)
        .then(res => this.setState({ reviews: res.data }))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ reviewContent: event.target.value });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        API.submitReview(this.state.id, this.state.reviewContent)
        .then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            this.loadReviews(this.state.id)
        }).catch(err => this.setState({ error: err.message }));
    };

    toggleReviews = () => {
        if (this.state.reviewsDisplayed === false) {
            this.setState({ reviewsDisplayed: true });
        } else {
            this.setState({ reviewsDisplayed: false });
        }
    }


    render() {
        return (
            <div className="col-lg-3" key={this.state.id}>
                <h2><a href={this.state.link}>{this.state.name}</a></h2>
                <div className="PathCardImg">
                    <img  src={this.state.image} alt={this.state.name}></img>
                </div>
                <p>{this.state.description}</p>
                {/* -----We may need this, please don't delete :)----- */}
                {/* <Link to={`${this.state.innerLink}/resource/${this.state.id}`}>SEE MORE</Link> */}
                
                <button class="see-reviews" onClick={this.toggleReviews}>{this.state.reviewsDisplayed ? "Show reviews" : "Hide reviews" }</button>
                { this.state.reviewsDisplayed ? true : (
                <div class="review-area">
                    {this.state.reviews.map(review => (
                        <ReviewCard 
                            review={review} 
                            user={this.state.user}
                        />
                    ))}
                    <ReviewForm
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        reviewContent={this.state.reviewContent}
                    />
                </div>
                ) }
            </div>
        );
    }
}

export default ResourceCard;