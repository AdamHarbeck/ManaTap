import React, {useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import PostCard from "../components/cards/PostCard";
import ReplyModal from "../components/modal/ReplyModal";
import MenuModal from "../components/modal/MenuModal";
import {MdOutlineArrowBackIosNew} from "react-icons/all";

// This will be created when the user clicks on a topic from the Forum page.


const Topic = (props) => {
    const [show, setShow] = useState(false);
    const [replies, setReplies] = useState(props.location.state.posts)
    let {id} = useParams();
    //This takes in the data from the TopicCard.
    const [menuShow, setMenuShow] = useState(false)

    console.log({id})
    console.log(replies)

    function newReply(childData){
        let data = {
            user: childData.user,
            timePosted: childData.timePosted,
            datePosted: childData.datePosted,
            post: childData.post,
            image: childData.image
        }
        setReplies(replies.concat(data))
        console.log(replies)
    }

    return(
        <div id={`topicContainer`}>
            <button onClick={()=>{menuShow===true? setMenuShow(false): setMenuShow(true)}}>MENU</button>
            <MenuModal menuShow={menuShow} onClose={()=>{setMenuShow(false)}}/>
            <NavLink to={`/Forum`} style={styles.link}><MdOutlineArrowBackIosNew style={styles.icon}/></NavLink>
            <div style={styles.header}><h1>{{id}.id}</h1></div>
            {replies.map(post =>{ return <PostCard key={post.user} id={post.user} val={post}/>})}
            <button onClick={()=>{setShow(true)}}>REPLY</button>
            <ReplyModal show={show} onClose={()=>{setShow(false)}} newReply={newReply} />
        </div>
    )
}
export default Topic;

const styles = {
    header: {
        maxWidth: `36rem`,
        height: `6rem`,
        border: `.1rem solid #000`,
        margin: `0 auto`,
        borderRadius: `1rem`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        marginTop: `1rem`,
        background: `#fff7ae`
    },
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