import { useTranslation } from "react-i18next";
import "./Home.css";
import SectionImg from "../../images/sectionimg.png";
import Therethings from "../../images/therethings.png";
import Woomen from "../../images/woomen.png";
import Logotwo from "../../images/logotwo.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [t, i18n] = useTranslation();

  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    const fetchProducts1 = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts1(response.data.products.slice(0, 7));
    };

    const fetchProducts2 = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts2(response.data.products.slice(0, 6));
    };

    fetchProducts1();
    fetchProducts2();
  }, []);

  return (
    <>
      <div className="container">
        <ul className="section-ul">
          <li className="section-li">{t("section1")}</li>
          <li className="section-li">{t("section2")}</li>
          <li className="section-li">{t("section3")}</li>
          <li className="section-li">{t("section4")}</li>
          <li className="section-li">{t("section5")}</li>
          <li className="section-li">{t("section6")}</li>
          <li className="section-li">{t("section7")}</li>
          <li className="section-li">{t("section8")}</li>
          <li className="section-li">{t("section9")}</li>
          <li className="section-li">{t("section10")}</li>
          <li className="section-li">{t("section11")}</li>
          <li className="section-li">{t("section12")}</li>
          <li className="section-li">{t("section13")}</li>
        </ul>
        <img className="sectionImg" src={SectionImg} alt="" />

        <div className="product-list-1">
          {products1.map((product) => (
            <div key={product.id} className="product-item-1">
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
            </div>
          ))}
        </div>

        <div className="wrapper-api">
          <h2>{t("api")}</h2>
          <div className="wrapper-arrow">
            <Link className="link-api" to="/products">
              See all
            </Link>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        <div className="wrapper-main">
          <ul className="wrapper-main-ul">
            <li className="wrapper-main-li">
              <div className="wrapper-deals">
                <img src={Logotwo} alt="" />
                <h3 className="main-h3">{t("main1")}</h3>
                <p className="main-p1">{t("main2")}</p>
                <div>
                  <p className="wrapper-main-get">Get your thing</p>
                </div>
              </div>
              <img src={Therethings} alt="" />
            </li>
            <li>
              <img src={Woomen} alt="" />
            </li>
          </ul>
        </div>

        <div className="wrapper-api-2">
          <h2>{t("api2")}</h2>
          <div className="wrapper-arrow-2">
            <Link className="link-api-2" to="/products">
              See all
            </Link>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        <div className="product-list-2">
          {products2.map((product) => (
            <div key={product.id} className="product-item-2">
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
              <p>{`$${product.price}`}</p>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="container">
          <ul className="footer-ul">
            <li>
              <p className="footer-p">{t("footer1")}</p>
              <p className="footer-p">{t("footer2")}</p>
              <p className="footer-p">{t("footer3")}</p>
              <p className="footer-p">{t("footer4")}</p>
              <p className="footer-p">{t("footer5")}</p>
              <p className="footer-p">{t("footer6")}</p>
              <p className="footer-p">{t("footer7")}</p>
              <p className="footer-p">{t("footer8")}</p>
            </li>
            <li>
              <p className="footer-p">{t("footer1")}</p>
              <p className="footer-p">{t("footer2")}</p>
              <p className="footer-p">{t("footer3")}</p>
              <p className="footer-p">{t("footer4")}</p>
              <p className="footer-p">{t("footer5")}</p>
              <p className="footer-p">{t("footer6")}</p>
              <p className="footer-p">{t("footer7")}</p>
              <p className="footer-p">{t("footer8")}</p>
              <p className="footer-p">{t("footer2")}</p>
            </li>
            <li>
              <p className="footer-p">{t("footer2")}</p>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li>
              <p className="footer-p">{t("footer1")}</p>
              <p className="footer-p">{t("footer2")}</p>
              <p className="footer-p">{t("footer3")}</p>
              <p className="footer-p">{t("footer4")}</p>
              <p className="footer-p">{t("footer5")}</p>
              <p className="footer-p">{t("footer6")}</p>
              <p className="footer-p">{t("footer7")}</p>
              <p className="footer-p">{t("footer8")}</p>
              <p className="footer-p">{t("footer2")}</p>
              <p className="footer-p">{t("footer7")}</p>
              <p className="footer-p">{t("footer8")}</p>
              <p className="footer-p">{t("footer2")}</p>
            </li>
            <li>
              <p className="footer-p">{t("footer1")}</p>
              <p className="footer-p">{t("footer2")}</p>
              <p className="footer-p">{t("footer3")}</p>
              <p className="footer-p">{t("footer4")}</p>
              <p className="footer-p">{t("footer5")}</p>
              <p className="footer-p">{t("footer6")}</p>
              <p className="footer-p">{t("footer7")}</p>
              <p className="footer-p">{t("footer8")}</p>
              <p className="footer-p">{t("footer2")}</p>
            </li>
          </ul>
          <p className="footer-p end">
            Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility ,
            User Agreement , Privacy , Payments Terms of Use , Cookies , Your
            Privacy Choices and AdChoice
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
