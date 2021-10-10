import React from "react";
import Results from "./Results";
import {Link, NavLink, useHistory} from "react-router-dom";


// I need to figure out how to group the search queries into something to send to the results page.
function Search(){
    let colors = [];


    // Checks if a color is already in the array. Adds if it isn't, deletes if it is.
    function colorQuery(color){
        console.log(colors.toString());
        console.log(colors.includes(color));
        if(colors.includes(color) == true){
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
        <div style={styles.container}>
            <h1>Search</h1>

            <input type={`checkbox`} id={`Black`} name={`Black`} onChange={()=>{
                colorQuery(`Black`);
            }}/>
            <label htmlFor={`Black`}>Black</label>

            <input type={`checkbox`} id={`Blue`} name={`Blue`} onChange={() => {
                colorQuery(`Blue`);
            }}/>
            <label htmlFor={`Blue`}>Blue</label>

            <input type={`checkbox`} id={`Green`} name={`Green`} onChange={() => {
                colorQuery(`Green`);
            }}/>
            <label htmlFor={`Green`}>Green</label>

            <input type={`checkbox`} id={`Red`} name={`Red`} onChange={() => {
                colorQuery(`Red`);
            }}/>
            <label htmlFor={`Red`}>Red</label>

            <input type={`checkbox`} id={`White`} name={`White`} onChange={() => {
                colorQuery(`White`);
            }}/>
            <label htmlFor={`White`}>White</label>

            <button>
                <Link to={()=>{return `/Results/colors="${colors.toString()}"`}}>Search</Link>
            </button>
        </div>
    )
}
export default Search;

const styles = {
    container:{

    }
}
