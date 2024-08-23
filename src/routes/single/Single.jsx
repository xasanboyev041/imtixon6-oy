import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Single.css";

const Single = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/2")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div className="container">
        <div className="product-page">
          <div className="product-page__container">
            <div className="product-page__image-section">
              <img
                className="product-page__main-image"
                src={product.images[0]}
                alt="Product"
              />
            </div>
            <div className="product-page__details-section">
              <h1 className="product-page__title">{product.title}</h1>
              <p className="product-page__description">{product.description}</p>
              <p>
                <strong>Price:</strong>{" "}
                <span className="product-page__price">${product.price}</span>
              </p>
              <button className="product-page__buy-now">Buy Now</button>
              <button className="product-page__add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
