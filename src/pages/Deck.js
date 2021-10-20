import React, {useState} from "react";
import DeckCard from "../components/cards/DeckCard";
import DeckModal from "../components/modal/DeckModal";
import MenuModal from "../components/modal/MenuModal";
import {MdOutlineArrowBackIosNew} from "react-icons/all";
import {NavLink} from "react-router-dom";

const Deck = () => {
    const [decks, setDecks] = useState([
        {
            title: `Azorius`,
            colors: `Blue, White`,
            cards: [{
                name: `Geist of Saint Traft`,
                manaCost: `{1}{W}{U}`,
                pAndT: `2/2`
            },{
                name: `Sphinx of New Prahv`,
                manaCost: `{W}{W}{U}{U}`,
                pAndT: `4/3`
            }
            ]
        },
        {
            title: `Golgari`,
            colors: `Black, Green`,
            cards: [{
                name: `Lord of Extinction`,
                manaCost: `{3}{B}{G}`,
                pAndT: `*/*`
            },{
                name: `Baloth Null`,
                manaCost: `{4}{B}{G}`,
                pAndT: `4/5`
            },{
                name: `Winding Constrictor`,
                manaCost: `{B}{G}`,
                pAndT: `2/3`
            }
            ]
        }
    ])
    const [show, setShow] = useState(false);
    const [menuShow, setMenuShow] = useState(false)

    function newDeck(childData){
        let data = childData;
        console.log(data)
        setDecks(decks.concat(data))
    }

    return(
        <div id={`deckContainer`}>
            <button onClick={()=>{menuShow===true? setMenuShow(false): setMenuShow(true)}}>MENU</button>
            <MenuModal menuShow={menuShow} onClose={()=>{setMenuShow(false)}}/>
            <div className={`back`}>
                <NavLink to={`/Home`} style={styles.link}><MdOutlineArrowBackIosNew style={styles.icon}/></NavLink>
                <h1>Deck Builder</h1>
            </div>

            {decks.map(deck=>{return <DeckCard key={deck.title} id={deck.title} val={deck} />})}
            <button onClick={()=>setShow(true)} className={`button`}>Create New Deck</button>
            <DeckModal show={show} onClose={()=>{setShow(false)}} newDeck={newDeck} />
        </div>
    )
}
export default Deck;

const styles = {
    link: {
        display: `block`,
        marginTop: `1rem`,
        textDecoration: `none`,
        color: `#111`
    },
    icon: {
        width: `2.4rem`,
        height: `2.4rem`,
        color: `#fff7ae`
    }
}