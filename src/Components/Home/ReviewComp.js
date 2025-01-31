import React from "react";
import { clint_review } from "../../DataStore/Dummyjson";

const ReviewComp = () => {
  return (
    <section class="review">
      {clint_review?.map((item) => {
        return (
          <div class="box">
            <div class="user">
              <img src={item?.img} alt="" />
              <div class="info">
                <h3>{item?.name}</h3>
                <span>{item?.dis}</span>
              </div>
            </div>
            <p>{item?.para}</p>
          </div>
        );
      })}
    </section>
  );
};

export default ReviewComp;
