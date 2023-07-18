import React from "react";

import { CarouselSection } from "./CarouselSection";
import { Categories } from "./Categories";
import{ContactSection} from "./ContactSection"

export const Home = () => {
  return (
    <div>
      <CarouselSection />
      <Categories  />
      <ContactSection />
    </div>
  );
};
