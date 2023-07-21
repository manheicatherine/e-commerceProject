import Carousel from "react-bootstrap/Carousel";


export const SliderSection = () => {
  const info = [{title:"Free Delivery & Returns", subtitle: "Triangl's Members get free delivery and free 30-day returns."}, {title:"Shop All New Arrivals", subtitle:"Shop"}, {title:"20% Off Full-Price Styles", subtitle:"20% Off Site-wide minimum spend £100. Exclusions Apply*."}]
 
    return (
        <div className="slider">
       <Carousel
      className="carouselText"
      indicators={false}
      controls={false}
      interval={4000}
      fade={true}
    >
      {info.map((infom) => {
        return (
          <Carousel.Item key={infom.title}>
           
            <h1>{infom.title}</h1>
            <button>{infom.subtitle}</button>
          </Carousel.Item>
        );
      })}
    </Carousel>
        </div>)
  
}
