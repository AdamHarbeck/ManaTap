import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import ResultsCard from "../components/cards/ResultsCard";
import MenuModal from "../components/modal/MenuModal";
import {MdOutlineArrowBackIosNew} from "react-icons/all";

// Sets the search query and sets it to the path before calling the API.
const Results= () => {
    let url = `https://api.magicthegathering.io/v1/cards?`;
    const  {id}  = useParams()
    console.log({id}.id)

    // let cards = [];
    const [cards, setCards] = useState([])
    const [menuShow, setMenuShow] = useState(false)

    // Calls on the API
    useEffect(()=>{
        async function getData(){
            let path = url + {id}.id;
            const response = await fetch(path);
            const data = await response.json();
            const cardList = data.cards;
            setCards(cardList)
            console.log(cards);
        }
        getData();
    }, [])

    let cardsWImg = []
    cards.forEach(card=>{if(card.imageUrl !== undefined){cardsWImg.push(card)}})

    return(
        <div id={`resultDiv`} style={styles.container}>
            <button onClick={()=>{menuShow===true? setMenuShow(false): setMenuShow(true)}}>MENU</button>
            <MenuModal menuShow={menuShow} onClose={()=>{setMenuShow(false)}}/>
            <div className={`back`}>
                <NavLink to={`/Search`} style={styles.link}><MdOutlineArrowBackIosNew style={styles.icon}/></NavLink>
                <h1>Results</h1>
            </div>

            {cards.length !== 0 ? cardsWImg.map(card=>{return <ResultsCard image={card.imageUrl} cardName={card.name} />}) : `Loading...`}
        </div>
    )
}
export default Results;

const styles = {

    link: {
        display: `inline-block`,
        textDecoration: `none`,
    },
    icon: {
        width: `2.4rem`,
        height: `2.4rem`,
        color: `#fff7ae`
    }

}