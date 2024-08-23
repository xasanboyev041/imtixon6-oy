import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="login-container">
          <h1>Hello</h1>
          <p>
            Sign in to eBay or <a href="#">create an account</a>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Continue</button>
          </form>
        </div>

        <p className="footer-end-two">
          Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility ,
          User Agreement , Privacy , Payments Terms of Use , Cookies , Your
          Privacy Choices and AdChoice
        </p>
      </div>
    </>
  );
};

export default Login;
