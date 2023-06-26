import { Link, useParams } from "react-router-dom";

export const Product = ({ product, category }) => {
  let { id } = useParams();

  const handleClick = (item) => {
    const items = JSON.parse(localStorage.getItem("cartItems"));

    if (items) {
      const checkIndex = items.findIndex((product) => product.id === item.id);
      if (checkIndex !== -1) {
        items[checkIndex].quantity++;
      } else {
        item.quantity = 1;
        items.push(item);
      }
      localStorage.setItem("cartItems", JSON.stringify(items));
    } else {
      item.quantity = 1;
      localStorage.setItem("cartItems", JSON.stringify([item]));
    }

    //item.quantity = 1;
    // localStorage.setItem(
    //   "cartItems",
    //   JSON.stringify(items ? [ item, ...items] : [item])
    // );
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

// const handleClick = (item) => {

//   const items = JSON.parse(localStorage.getItem("cartItems"));

//   let obj = {};
// if(items[item.id]){
// items[item.id]["quantity"] +=1
// localStorage.setItem(
//   "cartItems",
//   JSON.stringify(items)
// );

// }else{
// item.quantity = 1;
// items[item.id] = item

// localStorage.setItem(
//  "cartItems",
//  JSON.stringify(obj)
// );
// }

// };
