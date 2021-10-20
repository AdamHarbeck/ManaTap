import React from "react";
import {NavLink} from "react-router-dom";


// The clickable card on the home page.
// Use className={props.class} to be able to use styling form the App.css
const HomeCard = (props) => {
    return(
            <div id={`hcContainer`} >
                <h1 style={styles.heading}>{props.HCHeading}</h1>
                <div id={`overlay`}>
                    <NavLink to={props.pathLink} style={styles.link} ></NavLink>
                </div>
            </div>

    )
}
export default HomeCard

const styles = {
    link: {
        textDecoration: 'none',
        display: 'flex',
        width: '100%',
        height: '100%',
        color: `#0d0d0d`,
    },
    heading: {
        position: `absolute`,
        zIndex: `2`,
        color: `#fffdeb`,
        fontSize: `3rem`
    }
}