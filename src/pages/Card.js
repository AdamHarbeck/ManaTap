import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Tabs from "../components/Tabs";
import "../App.css"
import Heading from "../components/Heading";


// This will be created when the user clicks on a card.
const Card = () => {
    let url = `https://api.magicthegathering.io/v1/cards?`;
    let {id} = useParams();
    let [cardData, setCardData] = useState([]);
    console.log({id}.id);


    useEffect(()=>{
        async function getData(){
            let path = url + {id}.id;
            const response = await fetch(path);
            const data = await response.json();
            console.log(data);
            let newCard = data.cards[0]
            console.log(newCard)
            setCardData(newCard)
        }
        getData()
    }, [])

    if(cardData.length === 0){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }else{
        return(
            <div id={`cardContainer`}>
                <Heading />
                <h1 style={styles.mar}>{cardData.name}</h1>
                <img src={cardData.imageUrl} alt={`card art`} style={styles.mar}/>
                <div style={styles.btnContainer}>
                    <Tabs data={cardData}/>
                </div>
                {!cardData.rulings ? `` : <div style={styles.ruling}>
                        <h2>Rulings</h2>
                        {cardData.rulings.map(ruling=>{return(
                        <div style={styles.rulingCon}>
                        <div style={styles.rCon1}>
                        <p>{ruling.date}</p>
                        </div>
                        <div style={styles.rCon2}>
                        <p>{ruling.text}</p>
                        </div>
                        </div>
                        ) })}
                    </div>}
            </div>
        )
    }


}
export default Card;

const styles = {
    btnContainer: {
        display: `block`
    },
    rulingCon: {
        display: `flex`,
        flexDirection: `row`,
        width: `37.5rem`,
        justifyContent: `space-around`,
        alignItems: `center`
    },
    rCon1: {
        width: `5rem`
    },
    rCon2:{
        width: `28rem`
    },
    mar: {
        display: `block`,
        margin: `1rem auto`,
        textAlign: `center`,
        color: `#fffdeb`
    },
    ruling: {
        color: `#fff7ae`,
        fontSize: `1.4rem`
    }
}