import React from "react";
import { Link } from "react-router-dom";
import "./PathCard.css";

function PathCard(props) {
    return (
        <div className="PathContainer">
            <div key={props.path.id}>
                <Link to={"/paths/" + props.path.id}>
                    <div className="PathCardImg">
                        <img src={props.path.image} alt={props.path.name} ></img>
                    </div>
                    <div className="PathCardOverlay">
                        <div className="text">Pick Me!</div>
                    </div>
                    <p className="PathCardDesc">
                        {props.path.name}
                        <hr />
                        {props.path.description}
                    </p>
                </Link>
            </div>
        </div>
        

    );
}
export default PathCard;