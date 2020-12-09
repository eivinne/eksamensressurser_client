import React, {useState} from "react";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Offices from "./views/Offices";
import Articles from "./views/Articles";
import createArticle from "./views/CreateArticle";
import Contact from "./views/Contact";
import NavBarComponent from "./components/NavBarComponent";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginFormComponent from "./components/LoginFormComponent"
import { Route, Switch, Redirect } from "react-router-dom";
import Unauthorized from "./components/Unauthorized";
import withAuth from './components/withAuthentication';
import { checkToken } from "./utils/eventService";
export const Routes = () => {

  const [user, setUser] = useState(false)

const handleLogin = e => {
  e.preventDefault();
  setUser(true);
}

const handleLogout = e => {
  e.preventDefault();
  setUser(false);
}
  return (
    <div>
      <NavBarComponent/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        

        <Route exact path='/unauthorized' component={Unauthorized} />
        <Route exact path="/Offices" component={Offices} />
        <Route exact path="/Articles" component={Articles} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/createArticle" component={createArticle} />

        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </div>
  );
};
