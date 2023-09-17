// import axios from "axios";
// import React, { useState } from "react";
// import { Form, InputGroup, Button } from "react-bootstrap";

// const ProductForm = () => {
//   const [productName, setProductName] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [productQuantity, setProductQuantity] = useState("");
//   const [productImage, setProductImage] = useState("");

//   const BASE_URL =
//     "https://6505bec6ef808d3c66f06628.mockapi.io/products";

//   const handleChange = (e) => {
//     if (e.target.id == "ProductName") {
//       setProductName(e.target.value);
//     } else if (e.target.id == "ProductPrice") {
//       setProductPrice(e.target.value);

//     } else if (e.target.id == "ProductQuantity") {
//       setProductQuantity(e.target.value);
//     } else {
//       setProductImage(e.target.value);
//     }
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     await axios.post(BASE_URL, {
//   //       name: productName,
//   //       image: productImage,
//   //       price: productPrice,
//   //       amount: productQuantity,
//   //     });
//   //   } catch (error) {
//   //     console.log(error.message);
//   //   }
//   // };

//   const handleSubmit =  (e) => {
//     e.preventDefault();
//     axios.post("https://6505bec6ef808d3c66f06628.mockapi.io/products", {
//       name: productName,
//       image: productImage,
//       price: productPrice,
//       quantity: productQuantity,
//     }).then(response => console.log(response)).catch(err => console.log(err));

//   };

//   console.log(productName, productPrice, productQuantity, productImage);
//   return (
//     <div className="w-50">
//       <Form onSubmit={handleSubmit}>

//         <Form.Label htmlFor="inputPassword5">Product Name</Form.Label>
//         <Form.Control
//           required
//           type="text"
//           id="ProductName"
//           aria-describedby="passwordHelpBlock"
//           onChange={(e) => handleChange(e)}
//         />
//         <Form.Label htmlFor="inputPassword5">Product Price</Form.Label>
//         <Form.Control
//           required
//           type="number"
//           id="ProductPrice"
//           aria-describedby="passwordHelpBlock"
//           onChange={(e) => handleChange(e)}
//         />
//         <Form.Label htmlFor="inputPassword5">Product Quantity</Form.Label>
//         <Form.Control
//           required
//           type="number"
//           id="ProductQuantity"
//           aria-describedby="passwordHelpBlock"
//           onChange={(e) => handleChange(e)}
//         />
//         <Form.Label htmlFor="inputPassword5">Product Image</Form.Label>
//         <InputGroup className="mb-3">
//           <InputGroup.Text id="basic-addon3">
//             https://example.com/
//           </InputGroup.Text>
//           <Form.Control
//             required
//             id="ProductImage"
//             aria-describedby="basic-addon3"
//             onChange={(e) => handleChange(e)}
//           />
//         </InputGroup>
//         <Button variant="primary" type="submit">
//           Save to New Product
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default ProductForm;

import axios from "axios";
import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");

  const BASE_URL = "https://6505bec6ef808d3c66f06628.mockapi.io/products";

  const handleChange = (e) => {
    if (e.target.id === "ProductName") {
      setProductName(e.target.value);
    } else if (e.target.id === "ProductPrice") {
      setProductPrice(e.target.value);
    } else if (e.target.id === "ProductQuantity") {
      setProductQuantity(e.target.value);
    } else if (e.target.id === "ProductImage") {
      setProductImage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(BASE_URL, {
        name: productName,
        image: productImage,
        price: productPrice,
        quantity: productQuantity,
      })
      .then((response) => {
        console.log(response);
        setProductName("");
        setProductPrice("");
        setProductQuantity("");
        setProductImage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(productName, productPrice, productQuantity, productImage);
  return (
    <div className="w-50">
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputPassword5">Product Name</Form.Label>
        <Form.Control
          required
          type="text"
          id="ProductName"
          value={productName}
          aria-describedby="passwordHelpBlock"
          onChange={(e) => handleChange(e)}
        />
        <Form.Label htmlFor="inputPassword5">Product Price</Form.Label>
        <Form.Control
          required
          type="number"
          id="ProductPrice"
          value={productPrice}
          aria-describedby="passwordHelpBlock"
          onChange={(e) => handleChange(e)}
        />
        <Form.Label htmlFor="inputPassword5">Product Quantity</Form.Label>
        <Form.Control
          required
          type="number"
          id="ProductQuantity"
          value={productQuantity}
          aria-describedby="passwordHelpBlock"
          onChange={(e) => handleChange(e)}
        />
        <Form.Label htmlFor="inputPassword5">Product Image</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://example.com/
          </InputGroup.Text>
          <Form.Control
            required
            id="ProductImage"
            value={productImage}
            aria-describedby="basic-addon3"
            onChange={(e) => handleChange(e)}
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          Save to New Product
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
