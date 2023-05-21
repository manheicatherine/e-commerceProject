import React,{useState} from "react";
import { createContext } from "react";

export const ProductsContext = createContext();

export const Cart = ({children}) => {
  const [items, setItems] = useState([]);
 console.log(items)
  return (
    <ProductsContext.Provider value={{ items, setItems }}>
      {children}
    </ProductsContext.Provider>
  );
};
