import React from "react";
import { gallery_list } from "../../DataStore/Dummyjson";

const GalleryComp = () => {
  return (
    <section class="gallery">
      <h1 class="title">
        {" "}
        our <span>gallery</span> <a href="#">view all {">>"}</a>{" "}
      </h1>

      <div class="box-container">
        {gallery_list?.map((item) => {
          return (
            <div class="box">
              <img src={item?.img} alt="" />
              <div class="icons">
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share-alt"></a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GalleryComp;
