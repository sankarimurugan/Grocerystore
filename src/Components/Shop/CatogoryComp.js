import React from "react";
import { catogory_list } from "../../DataStore/Dummyjson";

const CatogoryComp = () => {
  return (
    <section class="category">
      <h1 class="title">
        {" "}
        our <span>category</span> <a href="#">view all {">>"}</a>{" "}
      </h1>
      <div className="catcont">
        {catogory_list?.map((item) => {
          return (
            <div class="box-container">
              <a class="box">
                <img src={item?.img} alt="" />
                <h3>{item?.name}</h3>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CatogoryComp;
