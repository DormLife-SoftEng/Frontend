import "bootstrap/dist/css/bootstrap.min.css";
import "./BootstrapOverride.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Forgetpassword from "./signin/Forgetpassword";
import Repassword from "./signin/Repassword";
import DormOwner from "./signup/DormOwner";
import DormFinder from "./signup/DormFinder";
import Dorm from "./dorm/Dorm";
import DormHome from "./dormown/dormhome";
import ContactSupport from "./dormown/ContactSupport";
import AddDromFrom from "./dormown/adddormform";
import Lobby from "./lobby/LobbyPage/Lobby";
import MainLobby from "./lobby/mainLobbyPage/MainLobby";
import CreatePage from "./lobby/CreateLobbyPage/CreatePage";
import Chatpage from "./lobby/Chatpage/Chatpage";
import PageNotFound from "./pagenotfound/PageNotFound";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { AuthContext } from "../contexts/auth.context";
import authService from "../services/auth.service";
import AuthRoute from "./routes/AuthRoute";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import { tokenDto } from "./type";
import DormOwnerRoute from "./routes/DormOwnerRoute";
import DormFinderRoute from "./routes/DormFinderRoute";
import Review from "./review/Review";
import AdminDormList from "./admin/AdminDormList";
import AdminEditRequest from "./admin/AdminEditRequest";

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
  const [authToken, setAuthToken] = useState<tokenDto | null>(token);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      <MuiThemeProvider theme={Theme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dorm/:dormID" component={Dorm} />
          <AuthRoute path="/signup/dormowner" Component={DormOwner} />
          <AuthRoute path="/signup/dormfinder" Component={DormFinder} />
          <AuthRoute path="/signup" Component={Signup} />
          <AuthRoute path="/signin/repassword" Component={Repassword} />
          <AuthRoute path="/signin/forgetpassword" Component={Forgetpassword} />
          <AuthRoute path="/signin" Component={Signin} />
          <DormOwnerRoute path="/dormowner/adddorm" Component={AddDromFrom} />
          <DormOwnerRoute path="/dormowner/contactSupport" Component={ContactSupport} />
          <DormOwnerRoute path="/dormowner/" Component={DormHome} />
          <DormFinderRoute path="/lobby/create" Component={CreatePage} />
          <DormFinderRoute path="/lobby/:lobbyID/chat" Component={Chatpage} />
          <DormFinderRoute path="/lobby/:lobbyID" Component={Lobby} />
          <DormFinderRoute path="/lobby" Component={MainLobby} />
          <DormFinderRoute path="/review" Component={Review} />
          <Route path="/admin" component={AdminDormList} />
          <Route path="/admin/editrequest" component={AdminEditRequest} />
          <Route component={PageNotFound} />
        </Switch>
      </MuiThemeProvider>
    </AuthContext.Provider>
  );
}
export default App;
