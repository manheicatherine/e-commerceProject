import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ProductPage } from "./components/ProductPage";
import {  useState } from "react";
import { CartContext } from "./contents/Cart";

function App() {
 const [cartItmes,setCartItems]=useState([])

  return (
    <div className="App">
      <CartContext.Provider value={{cartItmes,setCartItems}}>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/:category`} element={<ProductPage />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
