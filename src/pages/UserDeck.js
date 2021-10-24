import React, {useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import UDCard from "../components/cards/UDCard";
import {MdOutlineArrowBackIosNew} from "react-icons/all";
import Heading from "../components/Heading";

// This will be created when the user clicks on their deck. The info from local will be sent here.
const UserDeck = (props) => {
    const [deck, setDeck] = useState(props.location.state.cards);
    let {id} = useParams();
    console.log({id}.id)

    function deleteMe(data){
        console.log(data);
        const index = deck.findIndex(card=> card.name === data)
        console.log(index)
        setDeck(deck.filter(item=>item.name !== data))
    }

    return(
        <div id={`UDContainer`}>
            <Heading />
            <div className={`back`}>
                <NavLink to={`/Deck`} style={styles.link}><MdOutlineArrowBackIosNew style={styles.icon}/></NavLink>
                <h1>{{id}.id}</h1>
            </div>

            {deck.map(card=>{return <UDCard key={card.name} id={card.name} val={card} deleteMe={deleteMe}/>})}
        </div>
    )
}
export default UserDeck;

const styles = {
    link: {
        display: `block`,
        textDecoration: `none`,
        color: `#111`
    },
    icon: {
        width: `2.4rem`,
        height: `2.4rem`,
        color: `#fff7ae`
    }
}