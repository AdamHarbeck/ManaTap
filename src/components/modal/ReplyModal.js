import React from "react";

const ReplyModal = (props) => {
    if(!props.show){
        return null;
    }
    const onTrigger = () => {
        let date = Date().split(` `)
        console.log(date)
        let data = {
            user: `Current_User`,
            timePosted: `${date[4]}`,
            datePosted: `${date[1]}  ${date[2]} ${date[3]}`,
            post: document.querySelector(`#replyTArea`).value,
            image: `https://picsum.photos/50/50?random-20`
        };
        props.newReply(data);
        props.onClose();
    }

    return(
        <div style={styles.modal} onClick={props.onClose}>
            <div style={styles.content} onClick={e=>e.stopPropagation()}>
                <div style={styles.hfPad}>
                    <h2 style={styles.mTitle}>Reply</h2>
                </div>
                <div style={styles.mBody}>
                    <textarea id={`replyTArea`} placeholder={`Message...`} style={styles.textArea}/>
                </div>
                <div style={styles.hfPad}>
                    <button onClick={props.onClose} style={styles.button}>Cancel</button>
                    <button onClick={onTrigger} style={styles.button}>Reply</button>
                </div>
            </div>
        </div>
    )
}
export default ReplyModal;

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
        backgroundColor: `#fff7ae`,
        color: '#48284a'
    },
    hfPad: {
        padding: `1rem`,
    },
    mTitle: {
        margin: `0`,
        fontSize: '2rem'
    },
    mBody: {
        padding: `1rem`,
        borderTop: `.1rem solid #eee`,
        borderBottom: `.1rem solid #eee`
    },
    textArea: {
      width: '27rem',
      height: '8rem',
      color: '#48284a',
      border: '.1rem solid #48284a',
      borderRadius: '.5rem',
      boxShadow: 'inset 0 0 .3rem 0.05rem #48284a',
    },
    button: {
      width: '8rem',
      height: '3rem',
      border: '.1rem solid #48284a',
      borderRadius: '1rem',
      background: '#acd7ec',
      boxShadow: '0 .2rem .4rem 0 #48284a',
      textTransform: 'uppercase',
      margin: '0 1rem'
    }
}