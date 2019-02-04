import React from "react";
import { Link } from "react-router-dom";

const style = {
    image: {
        height: 100,
    }
};

function ResourceCard(props) {
    return (
        <div key={props.resource.id}>
            <h2><a href={props.resource.link}>{props.resource.name}</a></h2>
            <img src={props.resource.image} alt={props.resource.name} style={style.image}></img>
            <p>{props.resource.description}</p>
            <Link to={`${props.link}/resource/${props.resource.id}`}>SEE MORE</Link>
        </div>
    );
}

export default ResourceCard;