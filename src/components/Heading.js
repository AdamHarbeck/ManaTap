import React, {useState} from "react";
import {MdAccountCircle, MdMenu} from "react-icons/all";
import MenuModal from "./modal/MenuModal";
import {Link} from "react-router-dom";

const Heading = () => {
    const [menuShow, setMenuShow] = useState(false)

    return(
        <div id={`headingContainer`}>
            <div>
              <div onClick={()=>{menuShow===true? setMenuShow(false): setMenuShow(true)}}><MdMenu style={styles.menuBtn}/></div>
              <MenuModal menuShow={menuShow} onClose={()=>{setMenuShow(false)}}/>
            </div>
            
            <Link to={`/Home`} style={styles.homeLink} className={null}><h1 style={styles.heading}>Mana Tap</h1></Link>
            <div><MdAccountCircle style={styles.menuBtn}/></div>
        </div>
    )
}
export default Heading;

const styles= {
    menuBtn: {
        width: `3rem`,
        height: `3rem`,
        color: `#fff7ae`,
        cursor: `pointer`
    },
    heading: {
        fontFamily: `"Elsie Swash Caps", cursive`,
        fontSize: `3rem`,
        color: `#fff7ae`
    },
    homeLink: {
        textDecoration: `none`,
        display: `inline-block`
    }
}