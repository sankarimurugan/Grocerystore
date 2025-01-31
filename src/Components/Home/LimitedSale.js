import React from "react";
import { limit_off } from "../../DataStore/Dummyjson";

const LimitedSale = () => {
  return (
    <section class="banner-container">
      {limit_off?.map((item) => {
        return (
          <div class="banner">
            <img src={item?.bg_img} alt="" />
            <div class="content">
              <span>{item?.min_txt}</span>
              <h3>{item?.big_txt}</h3>
              <a class="btn">shop now</a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LimitedSale;
