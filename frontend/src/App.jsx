import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./Components/navbar/NavBar";
import Menu from "./Components/menu/Menu";
import Footer from "./Components/footer/Footer";
import "./styles/global.scss";
import Product from "./pages/product/Product";
import SellProduct from "./pages/sellproduct/SellProduct";
import BuyProduct from "./pages/buyproduct/BuyProduct";
import User from "./pages/user/User";
import SalesRecords from "./pages/sales records/SalesRecords";
import BoughtRecords from "./pages/bought records/BoughtRecords";
import SingleProduct from "./Components/single product/SingleProduct";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        {
          path: "/sellproduct",
          element: <SellProduct />,
        },
        {
          path: "/buyproduct",
          element: <BuyProduct />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/salesrecordes",
          element: <SalesRecords />,
        },
        {
          path: "/boughtrecords",
          element: <BoughtRecords />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
