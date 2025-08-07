import React from "react";


function Card(props ){
    return(
        <>
        <div className="card">
            <img src={props.img} alt="img1"></img>
            <h2>Photo {props.name}</h2>
        </div>
        </>
    )
}
export default Card;