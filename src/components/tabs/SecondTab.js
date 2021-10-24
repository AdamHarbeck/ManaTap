import React from "react";

const SecondTab = (props) => {
    let data = props.data
    return(
        <div style={styles.text} >
            <p >Set: {data.set}</p>
            <p >Number: {data.number}</p>
            <p >Artist: {data.artist}</p>
            <p >Legalities</p>
            <ul >
                {data.legalities.map(form =>{
                    return <p>Format: {form.format} Legality: {form.legality}</p>
                })}
            </ul>
            <p >Prints: {data.printings.toString()}</p>
        </div>
    )
}
export default SecondTab
const styles = {
    text: {
        fontSize: `1.6rem`,
        background: `#fff7ae`,
        display: `inline-block`,
        width: `100%`
    },

}