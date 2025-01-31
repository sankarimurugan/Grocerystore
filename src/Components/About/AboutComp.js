import React from "react";
import { aboutimg } from "../../assets/image";

const AboutComp = () => {
  return (
    <section class="about">
      <div class="image">
        <img src={aboutimg} alt="" />
      </div>

      <div class="content">
        <span>welcome to our shop</span>
        <h3>fresh and organic groceries</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
          sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae
          reprehenderit tempore eligendi, eum quibusdam perferendis dicta,
          incidunt dolores nemo ex.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam
          sapiente commodi hic.
        </p>
        <a class="btn">read more</a>
      </div>
    </section>
  );
};

export default AboutComp;
