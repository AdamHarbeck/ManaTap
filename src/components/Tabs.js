import React, {useState} from "react";
import FirstTab from "./tabs/FirstTab";
import SecondTab from "./tabs/SecondTab";


const Tabs = props =>{
    const [activeTab, setActiveTab] = useState("tab1")
    let data = props.data

    const handleTab1 = () => {
        setActiveTab("tab1")
    }
    const handleTab2 = () => {
        setActiveTab("tab2")
    }
    return(
        <div>
            <div  id={`tabs`}>
                <div id={`tabContainer`} className={activeTab === "tab1"?"active":""} >
                    <p id={`tabItem`} onClick={handleTab1}>Basic</p>
                </div>
                <div id={`tabContainer`} className={activeTab === "tab2"?"active":""}>
                    <p id={`tabItem`}  onClick={handleTab2}>More Info</p>
                </div>
            </div>

            {activeTab === `tab1` ? <FirstTab data={data}/> :<SecondTab data={data}/>}
        </div>
    )
}
export default Tabs

