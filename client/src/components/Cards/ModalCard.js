import React, {Component} from "react";
import "./ModalCard.css"
import ReviewCard from "./ReviewCard";
import ReviewForm from "../Review";

class ModalCard extends Component{
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