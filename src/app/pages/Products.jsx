import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../constants/products";

export default function Products() {
  const productCards = products.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      title={product.title}
      artist={product.artist}
      date={product.date}
      price={product.price}
      img={product.img}
    />
  ));
  return (
    <section className="page-section products">
      <h2 className="page-title">Products</h2>
      <div className="product-grid">{productCards}</div>
    </section>
  );
}
