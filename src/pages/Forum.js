import React, {useState} from "react";
import TopicCard from "../components/cards/TopicCard";
import Modal from "../components/Modal";
import MenuModal from "../components/modal/MenuModal";
import {NavLink} from "react-router-dom";
import {MdOutlineArrowBackIosNew} from "react-icons/all";

/*
When a topic is clicked it should navigate to the topic screen sending in a state that holds
the data from that topic. This state will include an array of posts which will need to be populated
on the screen.
:option1:
Set a state props in the Topic page and send in the state via the props. We can use data binding
to make sure the returning state is the same one as the one modified in the topic page.

*/

const Forum = () => {
    // Setting the states of the different categories.
    // Show is a state that controls the modal.
    const [show, setShow] =useState(false);
    const [general] = useState([
        {
            image: `https://picsum.photos/50/50?random-1`,
            title: `General Forum Rules`,
            lastPost: `Diablo_Destroyer`,
            postTime: `10:35 AM`,
            postDate: `10/07/2021`,
            posts: [
                {user: `ManaAdmin`, timePosted: `09:21 AM`, datePosted: `10/06/2021`,
                    post:`The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz 
                    prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. 
                    Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick 
                    quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting 
                    zephyrs vex bold Jim.`,
                    image: `https://picsum.photos/50/50?random-2`
                },{user: `Diablo_Destroyer`, timePosted: `10:35 AM`, datePosted: `10/07/2021`,
                    post: `How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. 
                    Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled.`,
                    image: `https://picsum.photos/50/50?random-1`
                }
            ]
        },
        {
            image: `https://picsum.photos/50/50?random-2`,
            title: `Maintenance and Bugs`,
            lastPost: `ManaAdmin`,
            postTime: `07:47 PM`,
            postDate: `10/01/2021`,
            posts: [
                {user: `ManaAdmin`, timePosted: `09:21 AM`, datePosted: `09/13/2021`,
                    post:`The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz 
                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. 
                Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick 
                quiz whangs jumpy veldt fox. `,
                    image: `https://picsum.photos/50/50?random-2`
                },{user: `ManaAdmin`, timePosted: `07:47 PM`, datePosted: `10/01/2021`,
                    post: `ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps 
                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy 
                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy 
                    fox.`,
                    image: `https://picsum.photos/50/50?random-2`
                }
            ]
        }
    ]);
    const [sets, setSets] = useState([
        {
            image: `https://picsum.photos/50/50?random-3`,
            title: `A Forgotten Realm`,
            lastPost: `Classy Cleric`,
            postTime: `03:19 PM`,
            postDate: `09/21/2021`,
            posts: [
                {user: `Classy Cleric`, timePosted: `03:19 PM`, datePosted: `09/21/2021`,
                    post:`The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz 
                    prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. 
                    Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick 
                    quiz whangs jumpy veldt fox. `,
                    image: `https://picsum.photos/50/50?random-3`
                }
            ]
        },
        {
            image: `https://picsum.photos/50/50?random-4`,
            title: `Theros Beyond Death`,
            lastPost: `Soul_Devourer`,
            postTime: `012:56 AM`,
            postDate: `10/04/2021`,
            posts: [
                {user: `Diablo_Destroyer`, timePosted: `09:21 AM`, datePosted: `09/27/2021`,
                    post:`The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz 
                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. 
                Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick 
                quiz whangs jumpy veldt fox. `,
                    image: `https://picsum.photos/50/50?random-1`
                },{user: `Soul_Devourer`, timePosted: `12:56 AMM`, datePosted: `10/04/2021`,
                    post: `ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps 
                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy 
                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy 
                    fox.`,
                    image: `https://picsum.photos/50/50?random-4`
                }
            ]
        }
    ]);
    const [cards, setCards] = useState([
        {
            image: `https://picsum.photos/50/50?random-5`,
            title: `Lord of Extinction`,
            lastPost: `Black&Green`,
            postTime: `011:19 AM`,
            postDate: `01/15/2020`,
            posts: [
                {user: `Black&Green`, timePosted: `11:19 AM`, datePosted: `01/15/2020`,
                    post:`The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz 
                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. 
                Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick 
                quiz whangs jumpy veldt fox. `,
                    image: `https://picsum.photos/50/50?random-5`
                }
            ]
        }
    ]);
    const [decks, setDecks] = useState([
        {
            image: `https://picsum.photos/50/50?random-6`,
            title: `Challenger Decks`,
            lastPost: `Wizard deCoast`,
            postTime: `06:33 PM`,
            postDate: `08/12/2021`,
            posts: [
                {user: `ManaAdmin`, timePosted: `07:57 AM`, datePosted: `04/08/2021`,
                    post:`The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz 
                    prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. 
                    Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick 
                    quiz whangs jumpy veldt fox. `,
                    image: `https://picsum.photos/50/50?random-7`
                },{user: `Wizard deCoast`, timePosted: `06:33 PM`, datePosted: `08/12/2021`,
                    post: `ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps 
                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy 
                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy 
                    fox.`,
                    image: `https://picsum.photos/50/50?random-6`
                }
            ]
        },
        {
            image: `https://picsum.photos/50/50?random-7`,
            title: `Zendakir vs Eldrazi`,
            lastPost: `Burning Power`,
            postTime: `02:01 AM`,
            postDate: `03/28/2021`,
            posts: [
                {user: `Classy Cleric`, timePosted: `07:33 PM`, datePosted: `01/09/2021`,
                    post:`The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz 
                    prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. 
                    Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick 
                    quiz whangs jumpy veldt fox. `,
                    image: `https://picsum.photos/50/50?random-4`
                },{user: `Wizard deCoast`, timePosted: `03:16 PM`, datePosted: `02/22/2021`,
                    post: `ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps 
                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy 
                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy 
                    fox.`,
                    image: `https://picsum.photos/50/50?random-11`
                },
                {user: `Burning Power`, timePosted: `02:01 AM`, datePosted: `03/28/2021`,
                    post: `ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps 
                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy 
                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy 
                    fox.`, image: `https://picsum.photos/50/50?random-7`}
            ]
        }
    ]);
    const [tournaments, setTournaments] = useState([
        {
            image: `https://picsum.photos/50/50?random-8`,
            title: `Unsactioned Obliteration`,
            lastPost: `ManaAdmin`,
            postTime: `05:09 AM`,
            postDate: `10/09/2021`,
            posts: [
                {user: `Classy Cleric`, timePosted: `07:33 PM`, datePosted: `09/28/2021`,
                    post:`The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz 
                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. 
                Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick 
                quiz whangs jumpy veldt fox. `,
                    image: `https://picsum.photos/50/50?random-10`
                },{user: `Wizard deCoast`, timePosted: `03:16 PM`, datePosted: `10/01/2021`,
                    post: `ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps 
                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy 
                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy 
                    fox.`,
                    image: `https://picsum.photos/50/50?random-9`
                },
                {user: `ManaAdmin`, timePosted: `05:09 AM`, datePosted: `10/09/2021`,
                    post: `ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps 
                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy 
                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy 
                    fox.`, image: `https://picsum.photos/50/50?random-8`}
            ]
        }
    ])
    const [menuShow, setMenuShow] = useState(false)

    // This adds a new post based on the data received from the modal
    function addNewPost(childData){
        let data = {
            image: childData.image,
            title: childData.title,
            lastPost: childData.lastPost,
            postTime: childData.postTime,
            postDate: childData.postDate,
            posts: childData.posts
        }
        console.log(data)
        // A switch statement to determine which category to add the post to.
        let category = childData.category;
        switch (category) {
            case `Sets`:
                setSets(sets.concat(data));
                break;
            case `Cards`:
                setCards(cards.concat(data));
                break;
            case `Decks`:
                setDecks(decks.concat(data));
                break;
            case `Tournaments`:
                setTournaments(tournaments.concat(data))
                break;
            default:
                break;
        }
    }
    // Callback function from the modal that sends the data from the modal and calls addNewPost
    function newTopic(childData){
        addNewPost(childData)
    }

    return(
        <div id={`forumDiv`}>
            <button onClick={()=>{menuShow===true? setMenuShow(false): setMenuShow(true)}}>MENU</button>
            <MenuModal menuShow={menuShow} onClose={()=>{setMenuShow(false)}}/>
            <div className={`back`}>
                <NavLink to={`/Home`} style={styles.link}><MdOutlineArrowBackIosNew style={styles.icon}/></NavLink>
                <h1>Forum</h1>
            </div>

            <button onClick={()=> setShow(true)}>New Topic</button>
            <Modal show={show} onClose={()=>setShow(false)} newTopic={newTopic}/>

            <h1>General</h1>
            {general.map(element =>{return <TopicCard key={element.title} id={element.title} val={element} />})}
            <h1>Sets</h1>
            {sets.map((element)=>{
                return <TopicCard key={element.title} id={element.title} val={element} />
            })}
            <h1>Cards</h1>
            {cards.map((element)=>{
                return <TopicCard key={element.title} id={element.title} val={element} />
            })}
            <h1>Decks</h1>
            {decks.map((element)=>{
                return <TopicCard key={element.title} id={element.title} val={element} />
            })}
            <h1>Tournaments</h1>
            {tournaments.map((element)=>{
                return <TopicCard key={element.title} id={element.title} val={element} />
            })}

        </div>
    )
}
export default Forum;

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
    },
}