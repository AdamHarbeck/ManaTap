import React, {useEffect, useState} from "react";
import TopicCard from "../components/cards/TopicCard";

// Forum topics will load from local storage.
const Forum = () => {
    const [forum, setForum] = useState(
            [{general: [
                {
                    image: `https://picsum.photos/50/50?random-1`,
                    title: `General Forum Rules`,
                    lastPost: `Diablo_Destroyer`,
                    postTime: `10:35 AM`,
                    postDate: `10/07/2021`
                },
                {
                    image: `https://picsum.photos/50/50?random-2`,
                    title: `Maintenance and Bugs`,
                    lastPost: `ManaAdmin`,
                    postTime: `07:47 PM`,
                    postDate: `10/01/2021`}
                ]},
            {sets: [
                {
                    image: `https://picsum.photos/50/50?random-3`,
                    title: `A Forgotten Realm`,
                    lastPost: `Classy Cleric`,
                    postTime: `03:19 PM`,
                    postDate: `09/21/2021`
                },
                {
                    image: `https://picsum.photos/50/50?random-4`,
                    title: `Theros Beyond Death`,
                    lastPost: `Soul_Devourer`,
                    postTime: `012:56 AM`,
                    postDate: `10/04/2021`
                }
            ]},
            {cards: [
                {
                    image: `https://picsum.photos/50/50?random-5`,
                    title: `Lord of Extinction`,
                    lastPost: `Black&Green`,
                    postTime: `011:19 AM`,
                    postDate: `01/15/2020`
                }
            ]},
            {decks: [
                {
                    image: `https://picsum.photos/50/50?random-6`,
                    title: `Challenger Decks`,
                    lastPost: `Wizard deCoast`,
                    postTime: `06:33 PM`,
                    postDate: `08/12/2021`
                },
                {
                    image: `https://picsum.photos/50/50?random-7`,
                    title: `Zendakir vs Eldrazi`,
                    lastPost: `Burning Power`,
                    postTime: `02:01 aM`,
                    postDate: `03/28/2021`
                }
            ]},
            {tournaments: [
                {
                    image: `https://picsum.photos/50/50?random-8`,
                    title: `Unsactioned Obliteration`,
                    lastPost: `ManaAdmin`,
                    postTime: `05:09 AM`,
                    postDate: `10/09/2021`
                }
            ]}]
    )
    // let general = forum[0].general;
    // let sets = forum[1].sets;
    // let cards = forum[2].cards;
    // let decks = forum[3].decks;
    // let tournaments = forum[4].tournaments;


    const futurePost = {
        image: `https://picsum.photos/50/50?random-9`,
        title: `newPost`,
        lastPost: `new-User`,
        postTime: `10:25 PM`,
        postDate: `10/11/2021`}

    // This will need to be fixed
    function addPost(){
        console.log(futurePost)
        setForum({
            general: [...forum[0].general, futurePost]
        });
        console.log(forum);
    }

    return(
        <div style={styles.container} id={`forumDiv`}>
            {console.log(forum)}
            <h1>Forum</h1>
            <button onClick={addPost}>New Post</button>
            <h1>General</h1>
            {console.log(forum[0].general)}
            {forum[0].general.map((element )=>{
                return <TopicCard key={element.title} id={element.title} val={element} />
            })}

            <h1>Sets</h1>
            {forum[1].sets.map((element)=>{
                return <TopicCard key={element.title} val={element} />
            })}

            <h1>Cards</h1>
            {forum[2].cards.map((element)=>{
                return <TopicCard key={element.title} val={element} />
            })}

            <h1>Decks</h1>
            {forum[3].decks.map((element)=>{
                return <TopicCard key={element.title} val={element} />
            })}

            <h1>Tournaments</h1>
            {forum[4].tournaments.map((element)=>{
                return <TopicCard key={element.title} val={element} />
            })}

        </div>
    )
}
export default Forum;

const styles = {
    container:{

    }
}