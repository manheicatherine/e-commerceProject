import React from 'react';
import { useContext } from "react";


export const ShoppingCart = () => {
    

  return (
    <div>
    {items.map((item)=>{
        return (<h1>{item.title}</h1>)
    })}
    </div>
  )
}
