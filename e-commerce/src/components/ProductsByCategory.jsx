import React, { useEffect, useState } from "react";

import { Product } from "./Product";
import { getProductsByCategory } from "../utils/api";

export const ProductsByCategory = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(category).then((res) => {
      setProducts(res);
    });
  }, [category]);

  if (!products) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="productscontainer">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Product
              product={product}
              category={category}
            />
          </div>
        );
      })}
    </div>
  );
};
