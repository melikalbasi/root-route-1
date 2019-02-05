import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
// import ReviewCard from "./ReviewCard";
// import ReviewForm from "../Review";
import "./PathCard.css";
import "./ModalCard"
import ModalCard from "./ModalCard";

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
        this.setState({openModal:!this.state.openModal})
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

    render() {
        return (
            <div className="PathContainer">
                <div key={this.state.id}>
                    <a href="{this.state.link}">
                        <div className="PathCardImg">
                            <img src={this.state.image} alt={this.state.name}></img>
                        </div>
                        <div className="overlay">
                            <div className="text">Pick Me!</div>
                        </div>
                        <p className="PathCardDesc">
                            {this.state.name}
                            <hr />
                            {this.state.description}
                            {/* <Link to={`${this.state.innerLink}/resource/${this.state.id}`}>SEE MORE</Link> */}
                        </p>
                    </a>
                   
                </div>
{this.state.openModal ? <ModalCard handleModal={this.handleModal}/>:null}
<button onClick={this.handleModal}>Open Modal</button>

            </div>

        );
    }
}

export default ResourceCard;