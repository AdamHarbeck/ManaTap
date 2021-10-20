import React from "react";
import {Link} from "react-router-dom";

const DeckCard = props => {

    return(
        <Link to={{pathname:`/UserDeck/${props.val.title}`, state: props.val}} style={styles.link}>
            <div key={props.id} id={`deckCardContainer`}>
                <div style={styles.nColor}>
                    <h2 style={styles.heading}>{props.val.title}</h2>
                    <p style={styles.text}>{props.val.colors}</p>
                </div>
                <div style={styles.cardCount}>
                    <h1>{props.val.cards.length}</h1>
                </div>
            </div>
        </Link>

    )
}
export default DeckCard;

const styles = {
    cardCount: {
        marginRight: `1rem`,
        justifyContent: `center`
    },
    nColor: {
        marginLeft: `1rem`,
        display: `flex`,
        flexDirection: `column`,
    },
    link: {
        textDecoration: `none`,
        display: 'inline-block',
        width: '100%',
        height: '100%',
        color: `#0d0d0d`
    },
    text: {
        fontSize: `1.4rem`
    },
    heading: {
        fontSize: `2rem`
    }
}