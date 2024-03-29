import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { ProductPage } from "./components/ProductPage";
import { ShoppingCart } from "./components/ShoppingCart";
import { Product } from "./components/Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/:category`} element={<ProductPage />} />
        <Route path={`/:category/:id`} element={<Product />} />
        <Route path={`/shoppingcart`} element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
