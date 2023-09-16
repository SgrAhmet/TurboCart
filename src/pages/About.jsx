// import Nav from "react-bootstrap/Nav";


// const About = () => {
//   return (
//     <>
//       <div className="sidebar">
//         {/* <Nav.Link href="/about/gallery">Gallery</Nav.Link>
//         <Nav.Link href="news">News</Nav.Link>
//         <Nav.Link href="vision">Vision</Nav.Link> */}

// <Nav.Link href="/about/gallery">Galeri</Nav.Link>
//         <Nav.Link href="/about/news">Haberler</Nav.Link>
//         <Nav.Link href="/about/vision">Vizyon</Nav.Link>
//       </div>
//     </>
//   ) 
// }

// export default About




// About.js

import React from "react";
import Nav from "react-bootstrap/Nav";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="sidebar">
        <Nav.Link href="/about/gallery">Galeri</Nav.Link>
        <Nav.Link href="/about/news">Haberler</Nav.Link>
        <Nav.Link href="/about/vision">Vizyon</Nav.Link>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default About;
