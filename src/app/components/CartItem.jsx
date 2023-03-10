import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../state/cartSlice";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

export default function CartItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();

  const sumPrice = () => {
    return (price * quantity).toFixed(2);
  };

  return (
    <article className="cart-item">
      <div className="cart-item-container-left">
        <img className="cart-item-image" src={img} alt={title} />
        <div className="cart-item-container-details">
          <h4 className="cart-item-title">{title}</h4>
          <h4 className="cart-item-price">${price}</h4>
          <button
            className="btn btn-remove"
            onClick={() => dispatch(removeItem(id))}
          >
            <AiOutlineClose />
            Remove
          </button>
        </div>
      </div>
      <div className="cart-item-container-right">
        <div className="cart-item-container-total">
          <p className="cart-item-total">${sumPrice()}</p>
        </div>
        <div className="cart-item-container-quantity">
          <button
            className="btn btn-quantity add"
            onClick={() => dispatch(increase({ id }))}
          >
            <AiOutlinePlus />
          </button>
          <p className="cart-item-quantity">{quantity}</p>
          <button
            className="btn btn-quantity subtract"
            onClick={() => {
              if (quantity === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            <AiOutlineMinus />
          </button>
        </div>
      </div>
    </article>
  );
}
