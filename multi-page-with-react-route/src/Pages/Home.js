import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <h3>Go to <Link to="/products">List of Product</Link></h3>
    </>
  );
};

export default HomePage;
