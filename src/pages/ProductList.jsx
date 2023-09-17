import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  const BASE_URL ="https://6505bec6ef808d3c66f06628.mockapi.io/products";

  const fetchProduct = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setProduct(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {product.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <ul>
          {product.map((item, i) => {
            const { name, price } = item;
            return (
              <li key={i}>
                {name} ,{price}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ProductList;
