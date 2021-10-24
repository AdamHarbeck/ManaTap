import React from "react";
import {Link} from "react-router-dom";
import {MdDelete} from "react-icons/all";

const UDCard = props => {
    function onTrigger(){
        let data = props.val.name;
        props.deleteMe(data)
    }


    return(

            <div key={props.id} id={`UDCardContainer`}>
                <Link to={`/Card/name="${props.id}"`} style={styles.link}>
                    <div style={styles.tAndM}>
                        <h2 style={styles.heading}>{props.val.name}</h2>
                        <p style={styles.text}>{props.val.manaCost}</p>
                    </div>
                </Link>
                <div style={styles.delPAndT}>
                    <div onClick={onTrigger}><MdDelete style={styles.icon}/></div>
                    <p style={styles.PT}>{props.val.pAndT}</p>
                </div>
            </div>

    )
}
export default UDCard

const styles= {
    tAndM: {
        marginLeft: `1rem`,
        display: `flex`,
        flexDirection: `column`
    },
    delPAndT: {
        marginRight: `1rem`,
    },
    PT: {
        marginTop: `1rem`,
        fontSize: `1.2rem`
    },
    link: {
        textDecoration: `none`,
        width: '80%',
        height: '100%',
        color: `#0d0d0d`,
    },
    heading: {
        fontSize: `1.8rem`
    },
    text: {
        fontSize: `1.2rem`
    },
    icon: {
        width: `2.4rem`,
        height: `2.4rem`,
        color: `#9a569f`
    }
}