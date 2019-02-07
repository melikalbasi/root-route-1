import React from "react";
import { Link } from "react-router-dom";
import "./SubjectCard.css";

function SubjectCard(props) {
    return (
        <div className="SubjectContainer">
            <div key={props.subject.id}>
                    <Link to={`${props.link}/subjects/${props.subject.id}`}>
                    <div className="SubjectCardImg">
                        <img className="SubjectCardImg" src={props.subject.image} alt={props.subject.name} ></img>
                    </div>
                    <div className="SubjectCardOverlay">
                        <div className="text">Pick Me!</div>
                    </div>
                    <p className="SubjectCardName">
                        {props.subject.name} </p>
                    <p className="SubjectCardDesc">
                        <hr />
                        {props.subject.description}
                        <hr/>
                    </p>
                    </Link>
            </div>
        </div>
    );
}

export default SubjectCard;