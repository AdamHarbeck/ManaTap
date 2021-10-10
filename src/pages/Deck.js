import React, {useEffect, useState} from "react";
import UserDeck from "./UserDeck";


// This can be sent a state to check the user's data and look for a deck
// This displays the decks the user has and allows the option to create a new one.
// When clicked the state that holds the deck info would need to be sent to the UserDeck page.

const Deck = () => {
    // This isn't working and I am not sure why. The value is apparently not iterable. Who knows!
    const [userData, setUserData] = useState({
        decks: [{title: `deck 1`, cards: [`Baleful Strix`, `Lord of Extinction`]}]
    });

    useEffect(()=>{
        async function updateState(){
            const [users] = [{title: `deck 2`, cards: [`Baloth`, `Petrahydrox`]}];
            // setUserData( [users]);
            setUserData({
                decks: [...userData.decks, users]
            })
            console.log([users][0].title);
            console.log(userData.decks[0].title);

        }
        updateState();
    },[]);




    return(
        <div style={styles.container}>
            {console.log(userData.decks[1])}
            <h1>Deck</h1>
            <ul>

                <li>{userData.length <= 1 ? `Loading` : userData.decks[0].title}</li>

            </ul>
        </div>
    )
}
export default Deck;

const styles = {
    container:{

    }
}