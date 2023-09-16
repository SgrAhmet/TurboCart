// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "../../src/components/NavBar";
// import Main from "../../src/pages/Main";
// import NewProduct from "../../src/pages/NewProduct";
// import ProductList from "../../src/pages/ProductList";
// import About from "../../src/pages/About";
// import UpdateProduct from "../../src/pages/UpdateProduct";
// import NotFound from "../../src/pages/NotFound";
// import Gallery from "../pages/Gallery";
// import News from "../pages/News";
// import Vision from "../pages/Vision";

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="" element={<Main />} />
//         <Route path="/new-product" element={<NewProduct />} />
//         <Route path="/product-list" element={<ProductList />} />

//         <Route path="/about" element={<About />}>
//           <Route path="/about/gallery" element={<Gallery/>}/>
//           <Route path="/about/vision" element={<Vision/>}/>
//           <Route path="/about/news" element={<News/>}/>

//         </Route>

//         <Route path="/update-product" element={<UpdateProduct />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;



// AppRouter.js

import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import NavBar from "../../src/components/NavBar";
import Main from "../../src/pages/Main";
import NewProduct from "../../src/pages/NewProduct";
import ProductList from "../../src/pages/ProductList";
import About from "../../src/pages/About";
import UpdateProduct from "../../src/pages/UpdateProduct";
import NotFound from "../../src/pages/NotFound";
import Gallery from "../pages/Gallery";
import News from "../pages/News";
import Vision from "../pages/Vision";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="" element={<Outlet />}>
            <Route path="/" element={<Main />} />
            <Route path="new-product" element={<NewProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="update-product" element={<UpdateProduct />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="about" element={<About />}>
            <Route path="gallery" element={<Gallery />} />
            <Route path="vision" element={<Vision />} />
            <Route path="news" element={<News />} />
          </Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
