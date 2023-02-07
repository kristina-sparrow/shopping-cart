import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../state/cartSlice";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, quantity, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (quantity < 1) {
    return (
      <section className="cart">
        <header className="cart-header">
          <h2>Your cart</h2>
          <h4 className="cart-empty">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header className="cart-header">
        <h2>Your cart</h2>
      </header>
      <div className="cart-items-container">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer className="cart-footer">
        <hr />
        <div className="cart-total">
          <p>Total ${total.toFixed(2)}</p>
        </div>
        <div className="cart-button-container">
          <button className="btn btn-checkout">Checkout</button>
          <button
            className="btn btn-clear"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </footer>
    </section>
  );
}
