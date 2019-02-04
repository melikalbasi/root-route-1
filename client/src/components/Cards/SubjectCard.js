import React from "react";
import { Link } from "react-router-dom";

const style = {
    image: {
        height: 100,
    }
};

function SubjectCard(props) {
    return (
        <div style={style.div} key={props.subject.id}>
            <Link to={`${props.link}/subjects/${props.subject.id}`}>
                <h2><a href={props.subject.link}>{props.subject.name}</a></h2>
                <img src={props.subject.image} alt={props.subject.name} style={style.image}></img>
                <p>{props.subject.description}</p>
            </Link>
        </div>
    );
}

export default SubjectCard;