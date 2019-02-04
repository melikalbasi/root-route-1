import React from "react";
import { Link } from "react-router-dom";


const style = {
    div: {

        borderRadius: 50,
        display: "inline-block",
        width: 100,
        margin: 100
    },

    image: {

        borderRadius: "100%",
        height: 150,
        width: 150,
        // clip: rect(0,200,200,0)
    },
    description: {
        height:200, 
        width:200,
        fontSize: 10
    }
};

function SubjectCard(props) {
    return (

        <div style={style.div} key={props.subject.id}>
            <Link to={`${props.link}/subjects/${props.subject.id}`}>
                <img src={props.subject.image} alt={props.subject.name} style={style.image}></img>
                <p style={style.description}>
                    {props.subject.description}
                </p>
                <h2><a href={props.subject.link}>{props.subject.name}</a></h2>
            </Link>
        </div>
    );
}

export default SubjectCard;