import React from "react";

const FirstTab = (props) => {
    let data = props.data
    return(
        <div style={styles.text} >
            <p>Cost: {data.cmc} {data.manaCost}</p>
            <p>Types: {data.type}</p>
            <p>P/T : {data.power}/{data.toughness}</p>
            <p>Text: {data.text}</p>
            <p>Rarity: {data.rarity}</p>
        </div>
    )
}
export default FirstTab
const styles = {
    text: {
        fontSize: `1.6rem`,
        background: `#fff7ae`,
        display: `inline-block`,
        width: `100%`
    }
}