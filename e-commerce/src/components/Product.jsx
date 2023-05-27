import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../contents/Cart";

export const Product = ({ product, category, cartItmes,setCartItems }) => {

  let { id } = useParams();

  useEffect(() => {}, []);

  const handleClick = (item) => {
    // setItems((items) => [...items, item]);
  };

  return (
    <div className="products">
      {!id ? (
        <Link to={`${category}/${product.id}`}>
          <img
            src={product.image}
            className="product-column"
            alt={product.title}
          />
        </Link>
      ) : (
        <img
          src={product.image}
          className="product-column"
          alt={product.title}
        />
      )}

      <h1>{product.title} </h1>
      <h1>£{product.price} </h1>
      <button
       onClick={() => handleClick(product)}
       >Add To Cart</button>
    </div>
  );
};
