import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import MenuModal from "../components/modal/MenuModal";
import {MdOutlineArrowBackIosNew} from "react-icons/all";


// I need to figure out how to group the search queries into something to send to the results page.
function Search(){
    let colors = [];
    const [menuShow, setMenuShow] = useState(false)


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
    // Put in a form for onSubmit
    return(

        <div id={`searchContainer`}>
            <button onClick={()=>{menuShow===true? setMenuShow(false): setMenuShow(true)}}>MENU</button>
            <MenuModal menuShow={menuShow} onClose={()=>{setMenuShow(false)}}/>

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
                    </div>
                <div style={styles.column}>
                        <input type={`checkbox`} id={`Blue`} name={`Blue`} onChange={() => {
                            colorQuery(`Blue`);
                        }}/>
                        <label htmlFor={`Blue`}>Blue</label>
                    </div>
                <div style={styles.column}>
                        <input type={`checkbox`} id={`Green`} name={`Green`} onChange={() => {
                            colorQuery(`Green`);
                        }}/>
                        <label htmlFor={`Green`}>Green</label>
                    </div>
                <div style={styles.column}><input type={`checkbox`} id={`Red`} name={`Red`} onChange={() => {
                        colorQuery(`Red`);
                    }}/>
                        <label htmlFor={`Red`}>Red</label></div>
                <div style={styles.column}>
                        <input type={`checkbox`} id={`White`} name={`White`} onChange={() => {
                            colorQuery(`White`);
                        }}/>
                        <label htmlFor={`White`}>White</label>
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
        color: `#48284A`,
        textTransform: `uppercase`,
        fontSize: `2.4rem`,
        fontFamily: `"Yanone Kaffeesatz", cursive`,
        letterSpacing: `.2rem`,
        fontWeight: `500`,
    },
    column: {
        height: `5.2rem`,
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
        margin: `10rem auto 0 auto`,
        width: `37.5rem`,

    }
}
