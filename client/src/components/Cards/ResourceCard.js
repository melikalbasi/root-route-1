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
        height: 200,
        width: 200,
        // clip: rect(0,200,200,0)
    },
    description: {
        height:150, 
        width:150,
        fontSize: 10
    }
};

// const style = {
//     image: {
//         height: 100,
//     }
// };

// function ResourceCard(props) {
//     return (

//         <div style= {style.div} key={props.resource.id}>
//             <img src={props.resource.image} alt={props.resource.name} style={style.image}></img>
//             <h2><a href={props.resource.link}>{props.resource.name}</a></h2>
//             <p style={style.p}>
//                 {props.resource.description}
//             </p>
//             <Link style={style.link} to={`${props.link}/resource/${props.resource.id}`}>SEE MORE</Link>

//         </div>
//     );
// }

function ResourceCard(props) {
    return (

        <div style={style.div} key={props.resource.id}>
            <Link to={"/resource/" + props.resource.id}>
                <img src={props.resource.image} alt={props.resource.name} style={style.image}></img>
                <p style={style.description}>
                    {props.resource.description}
                </p>
                <h2><a href={props.resource.link}>{props.resource.name}</a></h2>
                {/* <Link to={`${props.link}/resource/${props.resource.id}`}>SEE MORE</Link> */}

            </Link>
        </div>
    );
}

export default ResourceCard;