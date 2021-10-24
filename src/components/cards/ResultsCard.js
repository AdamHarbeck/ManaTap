import React from "react";
import {Link} from "react-router-dom";

const ResultsCard = props => {

    return(
        <div>
            <Link to={`/Card/name="${props.cardName}"`}>
                <img src={props.image} alt={`${props.cardName} card art`} style={styles.img}/>
            </Link>

        </div>
    )
}
export default ResultsCard

const styles = {
    img: {
        display: `block`,
        width: `30rem`,
        height: `41.839rem`,
        margin: `0 auto`,
        marginBottom: `1rem`,
        borderRadius: `1.3rem`,
        boxShadow:`0 .3rem .5rem .3rem #48284a`
    },

}