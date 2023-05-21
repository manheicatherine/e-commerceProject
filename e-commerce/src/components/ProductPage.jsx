import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../utils/api";
import { Product } from "./Product";

export const ProductPage = () => {
  const [product, setProduct] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getProductsById(id).then((res) => {
      setProduct(res)
    });
  },[product,id]);

  return (<>
    <Product product={product}/>
  </>);
};
