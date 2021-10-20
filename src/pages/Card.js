import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Tabs from "../components/Tabs";
import "../App.css"
import MenuModal from "../components/modal/MenuModal";


// This will be created when the user clicks on a card.
const Card = (props) => {
    let url = `https://api.magicthegathering.io/v1/cards?`;
    let {id} = useParams();
    let [cardData, setCardData] = useState([]);
    const [menuShow, setMenuShow] = useState(false)
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
                <button onClick={()=>{menuShow===true? setMenuShow(false): setMenuShow(true)}}>MENU</button>
                <MenuModal menuShow={menuShow} onClose={()=>{setMenuShow(false)}}/>
                <h1 style={styles.mar}>{cardData.name}</h1>
                <img src={cardData.imageUrl} alt={`card art`} style={styles.mar}/>
                <div style={styles.btnContainer}>
                    <Tabs data={cardData}/>
                </div>
                {!cardData.rulings ? `` : <div>
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
        height: `4rem`,
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
        color: `#fff7ae`
    }
}