import React, {useState} from "react";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Offices from "./views/Offices";
import Articles from "./views/Articles";
import Contact from "./views/Contact";
import NavBarComponent from "./components/NavBarComponent";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <NavBarComponent/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Offices" component={Offices} />
        <Route exact path="/Articles" component={Articles} />
        <Route exact path="/Contact" component={Contact} />


        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </div>
  );
};
