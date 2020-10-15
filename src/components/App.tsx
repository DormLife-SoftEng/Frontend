import React from "react";
import { Route, Switch } from "react-router-dom"
import Signup from './signup/Signup'
import "bootstrap/dist/css/bootstrap.min.css";
import DormFinder from "./signup/DormFinder";
import Home from "./home/Home";
import DormOwner from "./signup/DormOwner";
import Signin from "./signin/Signin";
import Dorm from "./dorm/Dorm"
import DormHome from "./dormown/dormhome";
import ContactSupport from "./dormown/ContactSupport";
import AddDromFrom from "./dormown/adddormform";
import MyComponent from "./google/goole";
import Forgetpassword from "./signin/Forgetpassword";
import Repassword from "./signin/Repassword";
import MainLobby from "./lobby/mainLobbyPage/MainLobby";
import CreatePage from "./lobby/CreateLobbyPage/CreatePage";
import Lobby from "./lobby/LobbyPage/Lobby";
import PageNotFound from "./pagenotfound/PageNotFound";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const Theme = createMuiTheme({
    palette: {
        primary: {
            main: "#F55E61",
        },
        secondary: {
            main: "#F8FBFE",
        },
        background: {
            paper: "#F8FBFE",
        },
    },
});
function App() {
    return (
        <MuiThemeProvider theme={Theme}>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signup/dormfinder" component={DormFinder} />
                    <Route exact path="/signup/dormowner" component={DormOwner} />
                    <Route exact path="/dorm/:id" component={Dorm} />
                    <Route exact path="/signin/forgetpassword" component={Forgetpassword} />
                    <Route exact path="/signin/repassword/:id" component={Repassword} />
                    <Route exact path="/lobby" component={MainLobby} />
                    <Route exact path="/lobby/create" component={CreatePage} />
                    <Route exact path="/lobby/:lobbyID" component={Lobby} />
                    <Route exact path="/dormowner/:id/ContactSupport" component={ContactSupport} />
                    <Route exact path="/dormowner/:id" component={DormHome} />
                    <Route exact path="/adddorm/:id" component={AddDromFrom} />
                    <Route
                        component={() => (
                            <>
                                <Home />
                                <PageNotFound />
                            </>
                        )}
                    />
                </Switch>
            </div>
        </MuiThemeProvider>
    );
}
export default App;
