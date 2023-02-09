import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarLine from "./navbar-categories/navbarLine";
import Home from "./navbar-categories/home";
import General from "./navbar-categories/general";
import Business from "./navbar-categories/business";
import Health from "./navbar-categories/health";
import Science from "./navbar-categories/science";
import Sports from "./navbar-categories/sports";
import Technology from "./navbar-categories/technology";
import Favourites from "./navbar-categories/favourites";
import Searching from "./navbar-categories/searching";

function Navbar() {
  return (
    <BrowserRouter>
      <NavbarLine />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/general" component={General} />
        <Route path="/business" component={Business} />
        <Route path="/health" component={Health} />
        <Route path="/science" component={Science} />
        <Route path="/sports" component={Sports} />
        <Route path="/technology" component={Technology} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/search" component={Searching} />
      </Switch>
    </BrowserRouter>
  );
}

export default Navbar;
