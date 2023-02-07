import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
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
      <Header />
      <Main />
      <Footer />
      {isOpen && <Modal />}
    </>
  );
}
