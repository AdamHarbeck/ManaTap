import React from "react";
import {Link, NavLink} from "react-router-dom";
import {MdOutlineArrowBackIosNew} from "react-icons/all";
import Heading from "../components/Heading";
import Blue from "../images/blue.png"
import White from "../images/white.png"
import Red from "../images/red.png"
import Black from "../images/black.png"
import Green from "../images/green.png"


function Search(){
    let colors = [];

    // Checks if a color is already in the array. Adds if it isn't, deletes if it is.
    function colorQuery(color){
        console.log(colors.toString());
        console.log(colors.includes(color));
        if(colors.includes(color) === true){
            let pos = colors.indexOf(color);
            console.log(pos)
            console.log(colors);
            colors.splice(pos, 1)
        }else{
            colors.push(color);
            console.log(colors)
        }
    }
    return(
        <div id={`searchContainer`}>
            <Heading />
            <div className={`back`}>
                <NavLink to={`/Home`} style={styles.link}><MdOutlineArrowBackIosNew style={styles.icon}/></NavLink>
                <h1>Search</h1>
            </div>
            <div style={styles.iContainer}>
                <div style={styles.column}>
                        <input type={`checkbox`} id={`Black`} name={`Black`} onChange={()=>{
                            colorQuery(`Black`);
                        }}/>
                        <label htmlFor={`Black`}>Black</label>
                        <img src={Black} style={styles.icon} alt={`Swamp mana`}/>
                    </div>
                <div style={styles.column}>
                        <input type={`checkbox`} id={`Blue`} name={`Blue`} onChange={() => {
                            colorQuery(`Blue`);
                        }}/>
                        <label htmlFor={`Blue`}>Blue</label>
                    <img src={Blue} style={styles.icon} alt={`Island mana`}/>
                    </div>
                <div style={styles.column}>
                        <input type={`checkbox`} id={`Green`} name={`Green`} onChange={() => {
                            colorQuery(`Green`);
                        }}/>
                        <label htmlFor={`Green`}>Green</label>
                    <img src={Green} style={styles.icon} alt={`Forest mana`}/>
                    </div>
                <div style={styles.column}>
                    <input type={`checkbox`} id={`Red`} name={`Red`} onChange={() => {
                        colorQuery(`Red`);
                    }}/>
                        <label htmlFor={`Red`}>Red</label>
                    <img src={Red} style={styles.icon} alt={`Mountain mana`}/>
                </div>
                <div style={styles.column}>
                        <input type={`checkbox`} id={`White`} name={`White`} onChange={() => {
                            colorQuery(`White`);
                        }}/>
                        <label htmlFor={`White`}>White</label>
                        <img src={White} style={styles.icon} alt={`Plains mana`}/>
                    </div>
            </div>
            <button className={"button"}>
                <Link to={()=>{return `/Results/colors="${colors.toString()}"`}} style={styles.btnLink}>Search</Link>
            </button>
        </div>
    )
}
export default Search;

const styles = {
    link: {
        display: `inline-block`,
        textDecoration: `none`,
        color: `#111`
    },
    icon: {
        width: `2.4rem`,
        height: `2.4rem`,
        color: `#fff7ae`
    },
    btnLink: {
        textDecoration: `none`,
        color: `#48284A`
    },
    column: {
        height: `9rem`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        fontSize: `1.8rem`,
        justifyContent: `space-between`,
        color: `#fff7ae`
    },
    iContainer: {
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-around`,
        margin: `3rem auto 0 auto`,
        width: `37.5rem`,
    },

}
