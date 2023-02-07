import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../constants/routes.json";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { quantity } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <div className="container-header">
        <Link to={routes.HOME}>
          <h1 className="header-logo">The Floating World</h1>
        </Link>
        <nav className="header-nav">
          <Link to={routes.HOME}>Home</Link>
          <Link to={routes.PRODUCTS}>Products</Link>
          <Link to={routes.CONTACT}>Contact</Link>
          <Link to={routes.CART}>
            <div className="container-header-cart">
              <FaShoppingCart />
              {quantity > 0 ? (
                <div className="quantity-cart">{quantity}</div>
              ) : null}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
