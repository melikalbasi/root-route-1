import React from "react";

function ReviewForm(props) {
  return (
    <form className="review">
        <label htmlFor="reviewfield">Review:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="reviewfield"
          type="text"
          className="form-control"
          placeholder="Add your review here"
          id="review"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Submit
        </button>
    </form>
  );
}

export default ReviewForm;
