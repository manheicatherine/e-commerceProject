import React from "react";
import { useParams } from "react-router-dom";
import { ProductsByCategory } from "./ProductsByCategory";

export const ProductPage = () => {
  let { category } = useParams();


  return (
    <>
      <ProductsByCategory
        category={category}
      
      />
    </>
  );
};
