import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../../src/components/NavBar";
import Main from "../../src/pages/Main";
import NewProduct from "../../src/pages/NewProduct";
import ProductList from "../../src/pages/ProductList";
import About from "../../src/pages/About";
import UpdateProduct from "../../src/pages/UpdateProduct";
import NotFound from "../../src/pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="/new-product" element={<NewProduct/>}/>
        <Route path="/product-list" element={<ProductList/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/update-product" element={<UpdateProduct/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
