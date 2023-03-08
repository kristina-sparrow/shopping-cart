import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../constants/routes.json";
import { BsBag } from "react-icons/bs";

export default function Header() {
  const { quantity } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <div className="header-logo">
        <Link to={routes.HOME}>
          <h1>Ukiyo-e Shop</h1>
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li className="header-nav-link">
            <Link to={routes.HOME}>Home</Link>
          </li>
          <li className="header-nav-link">
            <Link to={routes.PRODUCTS}>Products</Link>
          </li>
          <li className="header-nav-link">
            <Link to={routes.CONTACT}>Contact</Link>
          </li>
          <li>
            <Link to={routes.CART}>
              <div className="header-cart">
                <BsBag />
                {quantity > 0 ? (
                  <span className="header-cart-badge">{quantity}</span>
                ) : null}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
