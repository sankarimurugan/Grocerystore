import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import Header from "./Components/Header/Header";
import "./assets/scss/styles.scss";
import "./assets/scss/responcive.scss";
import Layout from "./Components/Header/Layout";
import ShopScreen from "./Screens/ShopScreen";
import AboutScreen from "./Screens/AboutScreen";
import ReviewScreen from "./Screens/ReviewScreen";
import BlogScreen from "./Screens/BlogScreen";
import ContactScreen from "./Screens/ContactScreen";
// import "bootstrap/dist/css/bootstrap.min.css";

const ReactRouts = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/review" element={<ReviewScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Route>
    </Routes>
  );
};

export default ReactRouts;
