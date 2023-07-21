import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getProducts } from "../utils/api";

export function CarouselSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  });

  return (
    <Carousel
      className="carousel"
      controls={false}
      interval={3000}
      fade={true}
    >
      {products.map((product) => {
        return (
          <Carousel.Item key={product.title}>
            <img
              src={product.image}
              className="carouselPic d-block w-100"
              alt={product.title}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
