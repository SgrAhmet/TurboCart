import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  let subtotal = 0
  

  const BASE_URL = "https://6505bec6ef808d3c66f06628.mockapi.io/products";

  const fetchProduct = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setProduct(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDec = (id, quantity) => {
   
    
    if(quantity == 1){
        handleRemove(id)
    }
    axios
      .put(`${BASE_URL}/${id}`, {
        quantity: quantity - 1,
      })
      .then((res) => {
        console.log(res);
        fetchProduct();
      })
      .catch((err) => console.log(err));
  };
  const handleInc = (id, quantity) => {
    axios
      .put(`${BASE_URL}/${id}`, {
        quantity: Number(quantity) + 1,
      })
      .then((res) => {
        console.log(res);
        fetchProduct();
      })
      .catch((err) => console.log(err));
  };

  const handleRemove = (id) => {
    axios
      .delete(`${BASE_URL}/${id}`)
      .then((res) => {
        console.log(res);
        fetchProduct();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {product.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {product.map((item, i) => {
            const { name, price, quantity, image, id } = item;
            // subtotal = subtotal + (Number(price)*Number(quantity)) )
            subtotal += price * quantity
            
            return (
              
              <Card
                key={id}
                style={{ width: "18rem" }}
                className="p-3 border border-dark"
              >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    <i>$</i> {price}
                  </Card.Text>

                  <div className="d-flex align-items-center justify-content-between w-50">
                    <Button
                      variant="primary"
                      onClick={() => handleDec(id, quantity)}
                    >
                      -
                    </Button>
                    <p> {quantity} </p>

                    <Button
                      variant="primary"
                      onClick={() => handleInc(id, quantity)}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="danger"
                    className="mt-3"
                    onClick={() => handleRemove(id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            );
          })}

          <div className="totalsDiv">
            
            <div className="myDivs" >
              <p>Subtotal</p>
              <p><i>$</i>{subtotal}</p>
            </div>

            <div className="myDivs" >
              <p>Tax(18%)</p>
              <p><i>$</i>{(subtotal * 0.18).toFixed(2)}</p>

            </div>
            <div className="myDivs" >
              <p>Shipping</p>
              <p><i>$</i>20</p>

            </div>
            <div className="myDivs" >
              <p>Total</p>
              <p><i>$</i>{(subtotal + subtotal* 0.18+20).toFixed(2)}</p>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
