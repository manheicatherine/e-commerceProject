import React from "react";
import { useParams } from "react-router-dom";
import { ProductsByCategory } from "./ProductsByCategory";
import { SliderSection } from "./Slider";
import { ContactSection } from "./ContactSection";

export const ProductPage = () => {
  let { category } = useParams();

  return (
    <>
      <SliderSection />
      <h1 className="categoryTitle">{category.toUpperCase()}</h1>
      <ProductsByCategory category={category} />
      <ContactSection />
    </>
  );
};
