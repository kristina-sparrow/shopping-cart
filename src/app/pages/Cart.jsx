import React from "react";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../state/modalSlice";
import { AiOutlineClose } from "react-icons/ai";

export default function Cart() {
  const { cartItems, quantity, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (quantity < 1) {
    return (
      <section className="page-section cart">
        <h2 className="page-title">Your cart</h2>
        <h4 className="cart-empty">is currently empty</h4>
      </section>
    );
  }
  return (
    <section className="page-section cart" id="cart">
      <h2>Your cart</h2>
      <div className="cart-items-container">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <hr />
      <div className="cart-total">
        <button
          className="btn btn-clear"
          onClick={() => dispatch(openModal("clear"))}
        >
          <AiOutlineClose />
          Clear Cart
        </button>
        <p>Total ${total.toFixed(2)}</p>
      </div>
      <button
        className="btn btn-checkout"
        onClick={() => dispatch(openModal("checkout"))}
      >
        Checkout
      </button>
    </section>
  );
}
