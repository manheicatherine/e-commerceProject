import React from "react";
import { CarouselSection } from "./CarouselSection";
import { Categories } from "./Categories";
import { ContactSection } from "./ContactSection";
import { SliderSection } from "./Slider";

export const Home = () => {
  return (
    <div>
      <SliderSection />
      <CarouselSection />
      <Categories />
      <ContactSection />
    </div>
  );
};
