import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const [t, i18n] = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      <div className="container">
        <ul className="navbar-ul">
          <li className="wrapper-li-one">
            <div className="wrapper-login-nav">
              <p>Hi?</p>
              <Link to="/login">Sing in</Link>
              <p>or</p>
              <Link to="/login">register</Link>
            </div>

            <div className="wrapper-nav123">
              <p className="nav1-p">{t("nav1")}</p>
              <p className="nav1-p">{t("nav2")}</p>
              <p className="nav1-p">{t("nav3")}</p>
            </div>
          </li>
          <li className="wrapper-li-two">
            <select
              defaultValue={i18n.language}
              onChange={handleChangeLanguage}
            >
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
            <p className="nav1-p">{t("nav4")}</p>
            <p className="nav1-p">{t("nav5")}</p>
            <i class="fa-regular fa-bell"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>

        <div className="wrapper-header">
          <img src={Logo} alt="" />
          <p className="shop-by">{t("header1")}</p>
          <input
            className="search-header"
            type="text"
            placeholder="Search for anything"
          />
          <button className="header-button">Search</button>
          <p className="advanse">{t("header2")}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
