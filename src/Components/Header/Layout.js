import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="flex-wrap">
      <Header />
      <div className="out-left col ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
