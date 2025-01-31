import React from "react";
import BlogListComp from "../Components/Blog/BlogListComp";

const BlogScreen = () => {
  return (
    <div>
      <div class="heading">
        <h1>Our Blogs</h1>
        <p>
          {" "}
          <a>Home {">>"}</a> About{" "}
        </p>
      </div>
      <BlogListComp />
    </div>
  );
};

export default BlogScreen;
