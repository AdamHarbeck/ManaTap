import React from "react";

const Modal = props => {
    if(!props.show){
        return null
    }
    const onTrigger = () =>{
        let date = Date().split(` `)
        let data = {
            image: `https://picsum.photos/50/50?random-11`,
            title: document.querySelector(`input`).value,
            lastPost: `local_User`,
            postTime: date[4],
            postDate: `${date[1]} ${date[2]} ${date[3]}`,
            posts: [{
                user: `local_user`,
                timePosted: date[4],
                datePosted: `${date[1]} ${date[2]} ${date[3]}`,
                post: document.querySelector(`#forumModal`).value,
                image: `https://picsum.photos/50/50?random-11`
            }],
            category: document.querySelector(`select`).value
        }
        props.newTopic(data) // This is where we are calling the method in the parent.
        props.onClose();
    }

    return(
        <div style={styles.modal} onClick={props.onClose}>
            <div style={styles.content} onClick={e=>e.stopPropagation()}>
                <div style={styles.headFootPad}>
                    <h2 style={styles.mTitle}>Create a Discussion Topic</h2>
                </div>
                <div style={styles.mBody}>
                    <input type={"text"} placeholder={ `Discussion Topic`} />
                    <label htmlFor={`category`}>Category</label>
                    <select id={`category`}>
                        <option value={`Sets`}>Sets</option>
                        <option value={`Cards`}>Cards</option>
                        <option value={`Decks`}>Decks</option>
                        <option value={`Tournaments`}>Tournaments</option>
                    </select>
                    <textarea id={`forumModal`} placeholder={`Message...`} />
                </div>
                <div style={styles.headFootPad}>
                    <button onClick={props.onClose}>Cancel</button>
                    <button onClick={onTrigger}>Create</button>
                </div>
            </div>
        </div>
    )
}
export default Modal

const styles = {
    modal: {
        position: `fixed`,
        left: `0`,
        right: `0`,
        top: `0`,
        bottom: `0`,
        backgroundColor: `rgba(0,0,0,0.5)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`
    },
    content: {
        width: `30rem`,
        backgroundColor: `#fff`
    },
    headFootPad: {
        padding: `1rem`
    },
    mTitle: {
        margin: `0`
    },
    mBody: {
        padding: `1rem`,
        borderTop: `.1rem solid #eee`,
        borderBottom: `.1rem solid #eee`
    }
}
