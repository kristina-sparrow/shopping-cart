import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import routes from "../constants/routes.json";

export default function Main() {
  return (
    <main className="main">
      <Routes>
        <Route exact path={routes.HOME} element={<Home />} />
        <Route exact path={routes.PRODUCTS} element={<Products />} />
        <Route exact path={routes.CONTACT} element={<Contact />} />
        <Route exact path={routes.CART} element={<Cart />} />
      </Routes>
    </main>
  );
}
