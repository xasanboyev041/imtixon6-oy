import { useTranslation } from "react-i18next";
import "./Products.css";
import Product from "../../images/productimg.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [t, i18n] = useTranslation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="wrapper-products">
        <h2 className="product-h2">{t("product")}</h2>
        <img src={Product} alt="" />
        <h3 className="product-h3">{t("product2")}</h3>
        <p className="product-p">{t("product3")}</p>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to="/single">
                <img src={product.thumbnail} alt={product.title} />
                <div className="product-info">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">${product.price}</p>
                  <p className="product-old-price">
                    Was: ${product.price + 50}
                  </p>
                  <p className="product-shipping">Free shipping</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
