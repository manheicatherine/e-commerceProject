import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home"
import{ProductPage} from "./components/ProductPage";
import {ShoppingCart} from "./components/ShoppingCart"

function App() {
  return (
    <div className="App">
         <Routes>
         <Route path={`/*`} element={<Home />} />
         <Route path={`/electronics/:id`} element={<ProductPage />} />
         <Route path={`/jewelery/:id`} element={<ProductPage />} />
         <Route path={`/men's clothing/:id`} element={<ProductPage />} />
         <Route path={`/women's clothing/:id`} element={<ProductPage />} />
         <Route path={`/shoppingcart`} element={<ShoppingCart />} />

        </Routes>
    </div>
  );
}

export default App;
