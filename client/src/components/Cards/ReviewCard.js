import React from "react";

function ReviewCard(props) {
    return (
        <div>
            <p>Review from user {props.user.name} ({props.user.email}): {props.review.reviewContent}</p>
        </div>
    );
}

export default ReviewCard;