import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const Product = () => {
  return (
    <>
      <h1>My Product Page</h1>
      {PRODUCTS.map((prod) => (
        <li key={prod.id}>
          <Link to={prod.id}>{prod.title}</Link>
        </li>
      ))}
    </>
  );
};

export default Product;
