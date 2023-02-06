import React from "react";
import { Link } from "react-router-dom";
import routes from "../constants/routes.json";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  function sumQuantity() {
    //do something...
  }
  return (
    <header>
      <div className="container-header">
        <Link to={routes.HOME}>
          <h1 className="header-logo">The Floating World</h1>
        </Link>
        <nav className="header-nav">
          <Link to={routes.HOME}>Home</Link>
          <Link to={routes.PRODUCTS}>Products</Link>
          <Link to={routes.CONTACT}>Contact</Link>
          <div className="container-btn-cart" onClick={openCart}>
            <button className="btn-cart">
              <FaShoppingCart />
            </button>
            {sumQuantity() > 0 ? (
              <div className="qty">{sumQuantity()}</div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
