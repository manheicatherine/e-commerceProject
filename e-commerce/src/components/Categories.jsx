import React, { useEffect, useState } from "react";

import { ProductsByCategory } from "./ProductsByCategory";
import { getCategories } from "../utils/api";

export const Categories = () => {
  const [categories, setCategrories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategrories(res);
    });
  }, [categories]);

  return (
    <div className="containercolumn">
      {categories.map((category) => {
        const upperLetter = category.toUpperCase();

        return (
          <div key={category}>
            <h1>{upperLetter}</h1>
            <br />
            <ProductsByCategory category={category} />
          </div>
        );
      })}
    </div>
  );
};
