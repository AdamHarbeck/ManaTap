import React from "react";
import {Link} from "react-router-dom";

const MenuModal = props => {
    if(!props.menuShow){
        return null;
    }
    const onTrigger = () => {
        props.onClose()
    }
    return(
        <div style={styles.modal} onClick={props.onClose}>
            <div style={styles.content} onClick={e=>e.stopPropagation()}>
                <div style={styles.mBody}>
                    <Link to={`/Home`} onClick={onTrigger} style={styles.link}>Home</Link>
                    <Link to={`/Search`} onClick={onTrigger} style={styles.link}>Card Search</Link>
                    <Link to={`/Deck`} onClick={onTrigger} style={styles.link}>Deck Builder</Link>
                    <Link to={`/Forum`} onClick={onTrigger} style={styles.link}>Forum</Link>
                </div>
            </div>
        </div>
    )
}
export default MenuModal

const styles = {
    modal: {
        position: `fixed`,
        zIndex: 1,
    },
    content: {
        width: `11rem`,
        backgroundColor: `#fff7ae`,
    },
    mBody: {
        padding: `1rem`,
        border: `.1rem solid #eee`,
        color: '#48284a'
    },
    link: {
        textDecoration: `none`,
        width: `10rem`,
        height: `3rem`,
        display: `block`,
        fontSize: '1.8rem'
    }
}