import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./state/cartSlice";

export default function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
      <Cart />
      {isOpen && <Modal />}
    </>
  );
}
