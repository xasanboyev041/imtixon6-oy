import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./home/Home"));
const Single = lazy(() => import("./single/Single"));
const Products = lazy(() => import("./products/Products"));
const Login = lazy(() => import("./login/Login"));

const RouteController = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              {" "}
              <Home />{" "}
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              {" "}
              <Products />{" "}
            </Suspense>
          }
        />
        <Route
          path="/single"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              {" "}
              <Single />{" "}
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              {" "}
              <Login />{" "}
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default RouteController;
