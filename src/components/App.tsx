import React from "react";
import { Route } from "react-router-dom"
import Signup from './signup/Signup'
import "bootstrap/dist/css/bootstrap.min.css";
import DormFinder from "./signup/DormFinder";
import Home from "./home/Home";
import DormOwner from "./signup/DormOwner";
import Signin from "./signin/Signin";
import Dorm from "./dorm/Dorm"
function App() {
    
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route  exact path="/signin" component={Signin} />
            <Route  exact path="/signup" component={Signup} />
            <Route  exact path="/signup/dormfinder" component={DormFinder} />
            <Route  exact path="/signup/dormowner" component={DormOwner} />
            <Route exact path="/dorm/:id" component={Dorm} />
        </div>
    )
}
export default App;