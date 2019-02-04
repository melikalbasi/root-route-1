import React from "react";
import { Link } from "react-router-dom";

// import { ListItem } from "../components/List";
const style = {
    div: {

        borderRadius: 50,
        display: "inline-block",
        width: 100,
        margin: 100
    },

    image: {

        borderRadius: "100%",
        height: 200,
        width: 200,
        // clip: rect(0,200,200,0)
    },
    description: {
        height:200, 
        width:200,
        fontSize: 10
    }
};

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function PathCard(props) {
    return (

        <div style={style.div} key={props.path.id}>
            <Link to={"/paths/" + props.path.id}>
                <img src={props.path.image} alt={props.path.name} style={style.image}></img>
                <p style={style.description}>
                    {props.path.description}
                </p>
                <h2>
                    {props.path.name}
                </h2>
            </Link>
        </div>
    );
}

export default PathCard;