import  axios from "axios"

const storeApi = axios.create({
    baseURL: "https://fakestoreapi.com",
  });
  
  export function getCategories() {
    return storeApi
      .get("./products/categories")
      .then(({ data }) => {
        return data;
      });
  }

  export function getProducts (){
    return storeApi.get("/products").then(({ data }) => {
        return data;
      });
  }

  export function getProductsByCategory (category){
    return storeApi.get(`/products/category/${category}`).then(({ data }) => {
        return data;
      });
  }

  export function getProductsById (id){
    return storeApi.get(`/products/${id}`).then(({ data }) => {
        return data;
      });
  }