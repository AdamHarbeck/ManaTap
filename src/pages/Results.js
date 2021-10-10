import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

// Sets the search query and sets it to the path before calling the API.
const Results= () => {
    let url = `https://api.magicthegathering.io/v1/cards?`;
    const  {id}  = useParams()
    console.log({id}.id)

    let cards = [];

    // Calls on the API
    useEffect(()=>{
        async function getData(){
            let path = url + {id}.id;
            const response = await fetch(path);
            const data = await response.json();
            console.log(data);
            const cardList = data.cards;
            console.log(cardList)
            cards= cardList;
            console.log(cards);
            const cName = document.createElement(`img`)
            cName.setAttribute(`src`,cards[0].imageUrl)
            const place = document.querySelector(`#resultDiv`)
            place.appendChild(cName)
        }
        getData();
    }, [])

    return(
        <div id={`resultDiv`} style={styles.container}>
            <h1>Results</h1>

        </div>
    )
}
export default Results;

const styles = {
    container:{

    }
}