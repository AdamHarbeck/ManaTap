import React from "react";
import {Route, Switch} from "react-router-dom"

import Home from "../pages/Home";
import Search from "../pages/Search";
import Results from "../pages/Results";
import Card from "../pages/Card";
import Deck from "../pages/Deck";
// import UserDeck from "../pages/UserDeck";
import Forum from "../pages/Forum";
import Topic from "../pages/Topic";
import NewForum from "../pages/NewForum";
import Account from "../pages/Account";

// UserDeck will need to be like Results and I will set a state or JSON object and send it to the UserDeck to load.
// Forum will also be the same and will set a state or JSON object and send it to the Topic page to load.
function Routes() {
    return(
        <div>
            <Switch>
                <Route exact path={`/`} component={Home} />
                <Route exact path={`/Home`} component={Home} />
                <Route exact path={`/Search`} component={Search} />
                <Route exact path={`/Results/:id`} component={Results} />
                <Route exact path={`/Card`} component={Card} />
                <Route exact path={`/Deck`} component={Deck} />
                {/*<Route exact path={`/UserDeck`} component={UserDeck} />*/}
                <Route exact path={`/Forum`} component={Forum} />
                <Route exact path={`/Topic`} component={Topic} />
                <Route exact path={`/NewForum`} component={NewForum} />
                <Route exact path={`/Account`} component={Account} />
            </Switch>
        </div>
    )
}
export default Routes