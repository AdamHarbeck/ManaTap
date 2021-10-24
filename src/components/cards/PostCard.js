import React from "react";

const PostCard = (props) => {
    return(
        <div key={props.id} id={`postCardContainer`}>
            <div style={styles.avaText}>
                <img src={props.val.image} alt={`User avatar`} />
                <div style={styles.mLeft}>
                    <h3 style={styles.heading}>{props.val.user}</h3>
                    <h3 style={styles.heading}>{props.val.timePosted}</h3>
                </div>
            </div>
            <div style={styles.textBox}>
                <p>{props.val.post}</p>
            </div>
        </div>
    )
}
export default PostCard;
const styles = {
    avaText: {
        display: `flex`,
        flexDirection: `row`,
        margin: `1rem 0 0 .5rem`
    },
    mLeft: {
        marginLeft: `.5rem`
    },
    textBox: {
        maxWidth: `30rem`,
        margin: `0 auto`,
        fontSize: `1.4rem`
    },
    heading: {
        fontSize: `1.6rem`
    }
}