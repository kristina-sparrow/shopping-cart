import React from "react";
import { Link } from "react-router-dom";
import routes from "../constants/routes.json";
import homepageImage from "../../assets/homepage-image.png";

export default function Home() {
  return (
    <section className="page-section home">
      <div className="hero-text">
        <p className="small-message">Traditional Japanese artwork</p>
        <p className="big-message">
          Explore the largest collection of 17th-19th century original Japanese
          woodblock prints in the United States
        </p>
        <Link to={routes.PRODUCTS}>
          <button className="btn btn-shop">Shop Now</button>
        </Link>
      </div>
      <img src={homepageImage} className="hero-img" alt="Woodblock print" />
    </section>
  );
}
