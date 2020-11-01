import "bootstrap/dist/css/bootstrap.min.css";
import "./BootstrapOverride.css"
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom"
import Home from "./home/Home";
import Forgetpassword from "./signin/Forgetpassword";
import Repassword from "./signin/Repassword";
import DormOwner from "./signup/DormOwner";
import DormFinder from "./signup/DormFinder";
import Dorm from "./dorm/Dorm";
import MyDorm from  "./dormown/MyDorm"
import ContactSupport from "./dormown/ContactSupport";
import AddDorm from "./dormown/AddDorm"
import Lobby from "./lobby/LobbyPage/Lobby";
import MainLobby from "./lobby/mainLobbyPage/MainLobby";
import CreatePage from "./lobby/CreateLobbyPage/CreatePage";
import Chatpage from "./lobby/Chatpage/Chatpage";
import PageNotFound from "./pagenotfound/PageNotFound";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { AuthContext } from "../contexts/auth.context";
import { RoomContext } from "../contexts/room.context"
import authService from "../services/auth.service";
import AuthRoute from "./routes/AuthRoute";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import { tokenDto } from "./type";
import DormOwnerRoute from "./routes/DormOwnerRoute";
import DormFinderRoute from "./routes/DormFinderRoute";
import Review from "./review/Review"
import { addRoomFormValue } from "./dormown/newType";

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

  const token = authService.getToken();
  const [authToken , setAuthToken] = useState<tokenDto | null>(token)

  return (
    <AuthContext.Provider value={{authToken ,setAuthToken}}>
      <MuiThemeProvider theme={Theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dorm/:dormID" component={Dorm} />
        <AuthRoute path="/signup/dormowner" Component={DormOwner} />
        <AuthRoute path="/signup/dormfinder" Component={DormFinder} />
        <AuthRoute path="/signup" Component={Signup} />
        <AuthRoute  path="/signin/repassword" Component={Repassword} />
        <AuthRoute  path="/signin/forgetpassword" Component={Forgetpassword} />
        <AuthRoute  path="/signin" Component={Signin} />
        <DormOwnerRoute path="/dormowner/adddorm" Component={AddDorm}  />
        <DormOwnerRoute path="/dormowner/contactSupport/:dormID" Component={ContactSupport} />
        <DormOwnerRoute path="/dormowner/" Component={MyDorm} />
        <DormFinderRoute path="/lobby/create" Component={CreatePage} />
        <DormFinderRoute path="/lobby/:lobbyID/chat" Component={Chatpage} />
        <DormFinderRoute path="/lobby/:lobbyID" Component={Lobby} />    
        <DormFinderRoute path="/lobby" Component={MainLobby} />
        <DormFinderRoute path="/review/:reviewID" Component={Review} />       
        <Route component={PageNotFound} />
      </Switch>

      </MuiThemeProvider>
    </AuthContext.Provider>
    
    )
}
export default App;
