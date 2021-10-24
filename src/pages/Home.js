import '../App.css';
import React from "react";
import HomeCard from "../components/cards/HomeCard";
import Heading from "../components/Heading";

// What is need on the home page? Menu, Account, Header, 3 Sections, Footer
// Class names can be used to add styling from App.css
const Home = () => {
    return(
        <div>
            <Heading />
            <HomeCard HCHeading={`Card Search`} pathLink={'/Search'} />
            <HomeCard HCHeading={`Deck Building`} pathLink={`/Deck`} />
            <HomeCard HCHeading={`Forum`} pathLink={`/Forum`} />
        </div>
    )
}
export default Home;