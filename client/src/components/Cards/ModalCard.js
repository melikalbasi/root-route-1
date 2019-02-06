import React, {Component} from "react";
import "./ModalCard.css"
import ReviewCard from "./ReviewCard";
import ReviewForm from "../Review";
import API from "../../utils/API";

class ModalCard extends Component{
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
    openModal:false

};


componentDidMount() {
    this.loadReviews(this.state.id);
}

loadReviews = resourceid => {
    API.getReviews(resourceid)
        .then(res => this.setState({ reviews: res.data }))
        .catch(err => console.log(err));
}

handleModal = () => {
    this.setState({ openModal: !this.state.openModal })
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


    render(){
        return (
            <div onClick={this.props.handleModal} className="ModalBackground">
                <div className="ModalBox">
                    <h1>Modal</h1>
                    {this.state.reviews.map(review => (
                        <ReviewCard review={review} />
                    ))}
                    <ReviewForm
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        reviewContent={this.state.reviewContent}
                    />
                </div>
            </div>
        )
    }
}
export default ModalCard;