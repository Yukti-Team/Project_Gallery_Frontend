import React from "react";

const HomeCard = (props) => {

    return (
        <div className="homeCard">
            <img src={props.imageUrl} alt={props.imageAlt} style={{ width: "70%", height: "auto" }} />
        </div>
    )
} 
export default HomeCard;