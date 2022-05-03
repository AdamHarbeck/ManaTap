import React from "react";

const DeckModal = props => {
    if(!props.show){
        return null
    }
    const onTrigger = () => {
        let data = {
            title: document.querySelector(`#deckInput`).value,
            colors: document.querySelector(`#colorType`).value,
            cards: []
        }
        props.newDeck(data)
        props.onClose()
    }
    return(
        <div style={styles.modal} onClick={props.onClose}>
            <div style={styles.content} onClick={e=>e.stopPropagation()}>
                <div style={styles.pad}>
                    <h2 style={styles.title}>New Deck</h2>
                </div>
                <div style={styles.body}>
                    <input type={`text`} placeholder={`Deck Name`} id={`deckInput`} style={styles.input}/>
                    <select id={`colorType`} style={styles.select}>
                        <option value={`Black`}>Black</option>
                        <option value={`Blue`}>Blue</option>
                        <option value={`Green`}>Green</option>
                        <option value={`Red`}>Red</option>
                        <option value={`White`}>White</option>
                        <option value={`Black,Blue`}>Black and Blue</option>
                        <option value={`Black,Green`}>Black and Green</option>
                        <option value={`Black,Red`}>Black and Red</option>
                        <option value={`Black,White`}>Black and White</option>
                        <option value={`Blue,Green`}>Blue and Green</option>
                        <option value={`Blue,Red`}>Blue and Red</option>
                        <option value={`Blue,White`}>Blue and White</option>
                        <option value={`Green,Red`}>Green and Red</option>
                        <option value={`Green,White`}>Green and White</option>
                        <option value={`Red,White`}>Red and White</option>
                        <option value={`Black,Blue,Green`}>Black, Blue, and Green</option>
                        <option value={`Black,Blue,Red`}>Black, Blue, and Red</option>
                        <option value={`Black,Blue,White`}>Black, Blue, and White</option>
                        <option value={`Black,Green,Red`}>Black, Green, and Red</option>
                        <option value={`Black,Green,White`}>Black, Green, and White</option>
                        <option value={`Black,Red,White`}>Black, Red, and White</option>
                        <option value={`Blue,Green,Red`}>Blue, Green, and Red</option>
                        <option value={`Blue,Green,White`}>Blue, Green, and White</option>
                        <option value={`Blue,Red,White`}>Blue, Red, and White</option>
                        <option value={`Green,Red,White`}>Green, Red, and White</option>
                        <option value={`Black,Blue,Green,Red`}>Black, Blue, Green, adn Red</option>
                        <option value={`Black,Green,Red,White`}>Black, Green, Red, and White</option>
                        <option value={`Blue,Green,Red,White`}>Blue, Green, Red, and White</option>
                        <option value={`Black,Blue,Green,White`}>Black, Blue, Green, and White</option>
                        <option value={`Black,Blue,Red,White`}>Black, Blue, Red, and White</option>
                        <option value={`Black,Blue,Red,Green,White`}>Black, Blue, Red, Green, and White</option>
                    </select>
                </div>
                <div style={styles.pad}>
                    <button onClick={props.onClose} style={styles.button}>Cancel</button>
                    <button onClick={onTrigger} style={styles.button}>Create</button>
                </div>
            </div>
        </div>
    )
}
export default DeckModal

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
        fontSize: '2rem',

    },
    pad: {
        padding: `1rem`
    },
    title: {
        margin: `0`,
        color: '#48284a'
    },
    body: {
        padding: `1rem`,
        borderTop: `.1rem solid #eee`,
        borderBottom: `.1rem solid #eee`
    },
    input: {
      width: '24rem',
      height: '2rem',
      color: '#48284a',
      border: '.1rem solid #48284a',
      borderRadius: '.5rem',
      boxShadow: 'inset 0 0 .3rem 0.05rem #48284a',
      margin: '0 0 1rem 0'
    },
    select: {
      width: '24.6rem',
      height: '2.5rem',
      color: '#48284a',
      border: '.1rem solid #48284a',
      borderRadius: '.5rem',
      boxShadow: 'inset 0 0 .3rem 0 #48284a'
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