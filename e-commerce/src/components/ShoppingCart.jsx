import React from 'react';
import { useContext } from "react";
import { ProductsContext } from '../contents/Cart';

export const ShoppingCart = () => {
    const { items, setItems } =useContext(ProductsContext);
  
  return (
    <div>
    {items.map((item)=>{
        return (<h1>{item.title}</h1>)
    })}
    </div>
  )
}
