import React from "react";
import DetailComp from "../Components/Home/DetailComp";
import ReviewComp from "../Components/Home/ReviewComp";

const ReviewScreen = () => {
  return (
    <div>
      <div class="heading">
        <h1>about us</h1>
        <p>
          {" "}
          <a>home {">>"}</a> about{" "}
        </p>
      </div>
      <DetailComp />
      <ReviewComp />
    </div>
  );
};

export default ReviewScreen;
