import React from 'react'
import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { ProductsByCategory } from './ProductsByCategory';
import { v4 as uuidv4 } from 'uuid';

export const Categories = () => {
    const [categories, setCategrories] = useState([]);
    
    useEffect(() => {
        getCategories().then((res) => {
          setCategrories(res);
        });
      },[]);

  return (
    <div className='containercolumn'>
      {categories.map((category) => {
        const upperLetter = category.toUpperCase();
        return (
         <> 
         <h1 key={uuidv4}>{upperLetter}</h1><br />
         <ProductsByCategory category={category}/>
         </>
        );
      })}

  </div>
  )
}
