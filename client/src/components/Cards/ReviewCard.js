import React from "react";

function ReviewCard(props) {
    return (
        <div>
            <p>Review #{props.review.id}: {props.review.reviewContent}</p>
        </div>
    );
}

export default ReviewCard;