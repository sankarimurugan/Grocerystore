import React from "react";
import { detail_list } from "../../DataStore/Dummyjson";

const DetailComp = () => {
  return (
    <section class="info-container">
      {detail_list?.map((item) => {
        return (
          <div class="info">
            <img src={item?.img} alt="" />
            <div class="content">
              <h3>{item?.big_txt}</h3>
              <span>{item?.min_txt}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DetailComp;
