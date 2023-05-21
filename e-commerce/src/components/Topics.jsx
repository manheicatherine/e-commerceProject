import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";



export const Topics = () => {
  const [categories, setCategrories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategrories(res);
    });
  },[categories]);

  return (
    <>
   
      <ul>
        {categories.map((category) => {
          const upperLetter = category.toUpperCase();
          return (
            <li key={category}>
              <a href={`/${category}`}>{upperLetter}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
