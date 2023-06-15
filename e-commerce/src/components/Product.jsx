
import { Link, useParams } from "react-router-dom";

export const Product = ({ product, category }) => {
  let { id } = useParams();


  const handleClick = (item) => {

    const items = JSON.parse(localStorage.getItem("cartItems"));
  const updateItem = items.map((productInCart)=>{
    if (productInCart.id === item.id )
      productInCart.quantity = productInCart.quantity + 1;
      return productInCart;
    
    
  })

  item.quantity = 1;
   
  localStorage.setItem(
    "cartItems",
    JSON.stringify(items ? [ item, ...items] : [item])
  );

   
  };


  return (
    <div className="products">
      {!id ? (
        <Link to={`${category}/${product.id}`}>
          <img
            src={product.image}
            className="product-column"
            alt={product.title}
          />
        </Link>
      ) : (
        <img
          src={product.image}
          className="product-column"
          alt={product.title}
        />
      )}
      <h1>{product.title} </h1>
      <h1>£{product.price} </h1>

      <button
        type="button"
        className="addToCart"
        onClick={() => handleClick(product)}
      >
        Add To Cart
      </button>
     
     
    </div>
  );
};
