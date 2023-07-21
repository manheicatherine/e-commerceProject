import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import{ContactSection} from "./ContactSection"
import {SliderSection} from "./Slider"


export const ShoppingCart = () => {
  const [arrayOfCartItems, setArrayOfCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) 
  );
  
  const sumWithInitial = Math.ceil(arrayOfCartItems.reduce(
    (acc, obj) =>  { return acc + obj.price * obj.quantity; }, 0
  ));

  useEffect(() => {
    
  }, [arrayOfCartItems]);

  const handleAdd = (item) => {
    const updateItem = arrayOfCartItems.map((productInCart) => {
      if (productInCart.id === item.id) {
        productInCart.quantity = productInCart.quantity + 1;
      }
      return productInCart;
    });
    setArrayOfCartItems(updateItem);
    localStorage.setItem("cartItems", JSON.stringify(updateItem));
  };
  
  const handleMinus = (item) => {
    const updateItem = arrayOfCartItems
      .map((productInCart) => {
        if (productInCart.id === item.id) {
          productInCart.quantity = productInCart.quantity - 1;
        }
        return productInCart;
      })
      .filter((productInCart) => {
        return productInCart.quantity > 0;
      });
    setArrayOfCartItems(updateItem);
    localStorage.setItem("cartItems", JSON.stringify(updateItem));
  };
  

  return (
    <>
    <SliderSection />
    <div className="shoppingcartcontainer">
      <h1 className="shoppingcarttitle">SHOPPING CART</h1>
      <br />
      {arrayOfCartItems? (
        <>
        <h2 className="shoppingCartTotal">{arrayOfCartItems.length} Items  </h2><h2 className="totalpriceSC">  Total Price: £{sumWithInitial}</h2>
          {arrayOfCartItems.map((item) => {
            const totalPrice= item.price  * item.quantity;
            
            return (
              <div className="productsSC" key={item.id}>
                <img src={item.image} alt={item.title}/>
                <h2 className="productSCTitle">{item.title}</h2>
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
                 
                </div>
                  <h2 >£{totalPrice}</h2>
              </div>
            );
          })}
          <div><button className="checkout">Go To Checkout</button></div>
        </>
      ) : (
        <>
          <h3>Your shopping cart is empty!</h3>
          <Link to="/">
       
            <button className="backtohome">Back To Main Page</button>
          </Link>
        </>
      )}
      <ContactSection />
    </div>
    </>
  );
};
