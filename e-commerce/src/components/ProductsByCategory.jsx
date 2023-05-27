import { getProductsByCategory } from "../utils/api";
import { useEffect, useState } from "react";
import React from "react";
import { Product } from "./Product";


export const ProductsByCategory = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(category).then((res) => {
      setProducts(res);
    });
  }, [category]);
  if (!products) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="productscontainer">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Product product={product} category={category} />
            </div>
          );
        })}
      </div>
    );
  }
};
