import React from "react";
import {Link} from "react-router-dom";

const TopicCard = (props) => {
    // TRYING TO SEND DATA TO TOPIC
    return(
        <div key={props.id} id={`topicCardContainer`}>
            <Link to={{pathname: `/Topic/${props.val.title}`, state: props.val}} style={styles.link}>
                <img src={props.val.image} alt={`User avatar`} style={styles.img}/>
                <div style={styles.textContainer}>
                    <h2>{props.val.title}</h2>
                    <p>{`Last post by: ${props.val.lastPost}`}</p>
                    <p>{`Last post:  ${props.val.postTime} ${props.val.postDate}`}</p>
                </div>
            </Link>
        </div>
    )
}
export default TopicCard;
const styles = {
    textContainer: {
        display: `inline-block`,
        maxWidth: `28rem`,
        marginLeft: `.5rem`
    },
    link: {
        textDecoration: `none`,
        display: 'inline-block',
        width: '100%',
        height: '100%',
        color: `#0d0d0d`
    },
    img: {
        marginLeft: `1rem`
    }
}