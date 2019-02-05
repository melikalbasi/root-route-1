import React from "react";
import { Link } from "react-router-dom";
import "./PathCard.css";

function SubjectCard(props) {
    return (
        <div className="PathContainer">
            <div key={props.subject.id}>
                <a href={props.subject.link}>
                    {/* <Link to={`${props.link}/subjects/${props.subject.id}`}>SEE MORE</Link> */}
                    <div className="PathCardImg">
                        <img src={props.subject.image} alt={props.subject.name} ></img>
                    </div>
                    <div className="overlay">
                        <div className="text">Pick Me!</div>
                    </div>
                    <p className="PathCardDesc">
                        {props.subject.name}
                        <hr />
                        {props.subject.description}
                    </p>

                </a>
            </div>
        </div>
    );
}

export default SubjectCard;