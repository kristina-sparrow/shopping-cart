import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../state/cartSlice";

export default function ProductCard({ id, title, artist, date, price, img }) {
  const dispatch = useDispatch();
  return (
    <article className="product-card">
      <img className="product-img" src={img} alt={title}></img>
      <div className="product-card-info">
        <h4 className="product-title">{title}</h4>
        <h5 className="product-details">
          {artist}
          {" | "}
          {date}
        </h5>
        <h4 className="product-price">${price}</h4>
      </div>
      <button className="btn btn-add" onClick={() => dispatch(addItem({ id }))}>
        Add to Cart
      </button>
    </article>
  );
}
