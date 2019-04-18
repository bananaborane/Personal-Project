import React from "react";
import { Switch, Link, HashRouter, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Mens from "./components/Mens/Mens";
import Womens from "./components/Womens/Womens";
import Headwear from "./components/Headwear/Headwear";
import Misc from "./components/Misc/Misc";
import Marketplace from "./components/Marketplace/Marketplace";
import Header1 from "./components/Header1/Header1";
import Collections from "./components/Collections/Collections";
import NotFound from "./components/NotFound/NotFound";
import Shop from "./components/Shop/Shop";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import Profile from "./components/Profile/Profile";
import Footwear from './components/Footwear/Footwear';
import EachBike from './components/EachBike/EachBike';
import EachMiscProduct from './components/EachMiscProduct/EachMiscProduct';
import EachMensProduct from './components/EachMensProduct/EachMensProduct';
import EachWomensProduct from './components/EachWomensProduct/EachWomensProduct';
import EachFootwearProduct from './components/EachFootwearProduct/EachFootwearProduct';
import EachHeadwearProduct from './components/EachHeadwearProduct/EachHeadwearProduct';
import DisplayCart from './components/DisplayCart/DisplayCart'

export default (
  <Switch>
    <Route exact path="/" render={() => <Main />} />
    <Route exact path="/shop" component={Shop} />
    <Route path="/shop/collections/marketplace/:id" component={EachBike} />
    <Route path="/shop/collections/misc/:id" component={EachMiscProduct} />
    <Route path="/shop/collections/headwear/:id" component={EachHeadwearProduct} />
    <Route path="/shop/collections/footwear/:id" component={EachFootwearProduct} />
    <Route path="/shop/collections/womens/:id" component={EachWomensProduct} />
    <Route path="/shop/collections/mens/:id" component={EachMensProduct} />
    <Route path="/shop/collections/marketplace" component={Marketplace} />
    <Route path="/shop/collections/misc" component={Misc} />
    <Route path="/shop/collections/headwear" component={Headwear} />
    <Route path="/shop/collections/footwear" component={Footwear} />
    <Route path="/shop/collections/womens" component={Womens} />
    <Route path="/shop/collections/mens" component={Mens} />
    <Route path="/shop/displaycart" component={DisplayCart} />
    <Route path="/shop/collections" component={Collections} />
    <Route path="/loginregister" component={LoginRegister} />
    <Route path="/profile" component={Profile} />
    <Route component={NotFound} />
  </Switch>
);
