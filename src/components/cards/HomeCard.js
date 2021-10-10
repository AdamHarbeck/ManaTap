import React from "react";
import {NavLink} from "react-router-dom";


// The clickable card on the home page.
// Use className={props.class} to be able to use styling form the App.css
const HomeCard = (props) => {
    return(
        <div style={styles.container}>
            <NavLink to={props.pathLink} style={styles.link} >
                <h1>{props.HCHeading}</h1>
            </NavLink>

        </div>
    )
}
export default HomeCard

const styles = {
    container: {
        maxWidth: `80rem`,
        height: `25rem`,
        border: '.1rem solid #000000'
    },
    link: {
        textDecoration: 'none',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        color: `#0d0d0d`
    }
}