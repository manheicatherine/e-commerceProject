import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  const [arrayOfCartItems, setArrayOfCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );
  useEffect(() => {}, [arrayOfCartItems]);

  const handleAdd = (item) => {
    const updateItem = arrayOfCartItems.map((productInCart) => {
      if (productInCart.id === item.id ){
         productInCart.quantity = productInCart.quantity + 1;
        }
        return productInCart;
       
    });
    localStorage.setItem("cartItems", JSON.stringify(updateItem));
 
  };

  const handleMinus = (item) => {
    const updateItem = arrayOfCartItems.map((productInCart) => {
      if (productInCart.id === item.id && productInCart.quantity === 1){
          productInCart.quantity = productInCart.quantity - 1;
        }
        return productInCart;
      
    }).filter((productInCart)=>{
      return productInCart.quantity > 0;
    });
    localStorage.setItem("cartItems", JSON.stringify(updateItem));
  

  };

  return (
    <div className="shoppingcartcontainer">
      <h1 className="shoppingcarttitle">Shopping Cart</h1>
      {arrayOfCartItems.length>0 ? (
        <>
          {arrayOfCartItems.map((item) => {
            const totalPrice= item.price  * item.quantity
            return (
              <div className="products" key={item.id}>
                <h2>{item.title}</h2>
                <img src={item.image} className="product-column" />
                <div className="amountSection">
                  <button
                    onClick={() => handleAdd(item)}
                    className="amountBlock"
                  >
                    +
                  </button>
                  <form className="amountBlock">{item.quantity}</form>
                  <button
                    onClick={() => handleMinus(item)}
                    className="amountBlock"
                    
                  >
                    -
                  </button>
                  <h2>Total Price: £{totalPrice}</h2>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h3>Your shopping cart is empty!</h3>
          <Link to="/">
       
            <button className="backtohome">Back To Main Page</button>
          </Link>
        </>
      )}
    </div>
  );
};
