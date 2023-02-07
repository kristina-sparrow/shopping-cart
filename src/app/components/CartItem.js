import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function CartItem({ id, title, price, img, quantity }) {
  const sumPrice = () => {
    return (cartItem.price * cartItem.quantity).toFixed(2);
  };
  return (
    <article className="cart-item">
      <img className="cart-item-image" src={img} alt={title} />
      <div className="cart-item-container-left">
        <h4 className="cart-item-title">{title}</h4>
        <h4 className="cart-item-price">${price}</h4>
        <button className="btn btn-remove">Remove</button>
      </div>
      <div className="cart-item-container-right">
        <div className="cart-item-container-total">
          <p className="cart-item-total">{sumPrice()}</p>
        </div>
        <div className="cart-item-container-quantity">
          <button className="btn btn-quantity">
            <AiOutlinePlus />
          </button>
          <p className="cart-item-quantity">{quantity}</p>
          <button className="btn btn-quantity">
            <AiOutlineMinus />
          </button>
        </div>
      </div>
    </article>
  );
}
