import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Cart } from "./contents/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cart>
      <Header />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Cart>
  </React.StrictMode>
);
