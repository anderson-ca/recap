// --- third-party imports --- //
import React from "react";
import {Switch, Route} from "react-router-dom";

// --- local imports --- //
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Count from "./components/Count"
import Flags from "./components/Flags"
import CountryDetails from "./components/CountryDetails"
import "./App.css";

const App = () => {
    return (
        <div>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/count" component={Count}/>
                <Route path="/flags" component={Flags}/>
                <Route path="/flag/:id" component={CountryDetails}/>
            </Switch>
        </div>
    );
}

export default App;
