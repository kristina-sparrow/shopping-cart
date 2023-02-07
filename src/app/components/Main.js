import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/cart/Cart";
import routes from "../constants/routes.json";

export default function Main() {
  return (
    <main className="main">
      <Routes>
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.PRODUCTS} component={Products} />
        <Route exact path={routes.CONTACT} component={Contact} />
        <Route exact path={routes.CART} component={Cart} />
      </Routes>
    </main>
  );
}
