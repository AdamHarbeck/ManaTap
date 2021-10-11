import React from "react";

const TopicCard = (props) => {
    // This will need an image, heading, posted by, and posted when.
    return(
        <div key={props.id}>
            <img src={props.val.image} alt={`User avatar`} />
            <div>
                <h2>{props.val.title}</h2>
                <p>{`Last post by: ${props.val.lastPost}`}</p>
                <p>{`Last post:  ${props.val.postTime} ${props.val.postDate}`}</p>
            </div>
        </div>
    )
}
export default TopicCard;