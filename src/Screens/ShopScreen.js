import React from "react";
import { useNavigate } from "react-router-dom";
import CatogoryComp from "../Components/Shop/CatogoryComp";
import ProductList from "../Components/Home/ProductList";

const ShopScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="heading">
        <h1>our shop</h1>
        <p>
          <a onClick={() => navigate("/home")} className="cp">
            home {">>"}
          </a>{" "}
          shop{" "}
        </p>
      </div>
      <CatogoryComp />
      <ProductList />
    </div>
  );
};

export default ShopScreen;
