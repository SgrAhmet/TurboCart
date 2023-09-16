import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../../src/components/NavBar";
import Main from "../../src/pages/Main";
import NewProduct from "../../src/pages/NewProduct";

const AppRouer = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="/new-product" element={<NewProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouer;
