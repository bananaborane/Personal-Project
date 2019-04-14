import React from "react";
import { Switch, Link, HashRouter, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Mens from "./components/Mens/Mens";
import Womens from "./components/Womens/Womens";
import Headwear from "./components/Headwear/Headwear";
import Accessories from "./components/Accessories/Accessories";
import Marketplace from "./components/Marketplace/Marketplace";
import Header1 from "./components/Header1/Header1";
import Collections from "./components/Collections/Collections";
import NotFound from "./components/NotFound/NotFound";
import Shop from "./components/Shop/Shop";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import Profile from "./components/Profile/Profile";

export default (
  <Switch>
    <Route exact path="/" render={() => <Main />} />
    <Route exact path="/shop" component={Shop} />
    <Route path="/shop/collections/marketplace" component={Marketplace} />
    <Route path="/shop/collections/accessories" component={Accessories} />
    <Route path="/shop/collections/headwear" component={Headwear} />
    <Route path="/shop/collections/womens" component={Womens} />
    <Route path="/shop/collections/mens" component={Mens} />
    <Route path="/shop/collections" component={Collections} />
    <Route path="/loginregister" component={LoginRegister} />
    <Route path="/profile" component={Profile} />
    <Route component={NotFound} />
  </Switch>
);
