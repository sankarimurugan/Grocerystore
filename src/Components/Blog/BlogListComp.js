import React from "react";
import { blog_list } from "../../DataStore/Dummyjson";

const BlogListComp = () => {
  return (
    <section class="blogs">
      <h1 class="title">
        {" "}
        our <span>blogs</span> <a href="#">view all {">>"}</a>{" "}
      </h1>

      <div class="box-container">
        {blog_list?.map((item) => {
          return (
            <div class="box">
              <div class="image">
                <img src={item?.img} alt="" />
              </div>
              <div class="content">
                <div class="icons">
                  <a href="#">
                    {" "}
                    <i class="fas fa-calendar"></i>
                    {item?.date}
                  </a>
                  <a href="#">
                    {" "}
                    <i class="fas fa-user"></i> {item?.by}
                  </a>
                </div>
                <h3>{item?.heading}</h3>
                <p>{item?.para}</p>
                <a href="#" class="btn">
                  read more
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogListComp;
