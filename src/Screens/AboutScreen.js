import React from "react";
import { useNavigate } from "react-router-dom";
import AboutComp from "../Components/About/AboutComp";
import GalleryComp from "../Components/About/GalleryComp";
import ContactComp from "../Components/About/ContactComp";

const AboutScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="heading">
        <h1>about us</h1>
        <p>
          {" "}
          <a className="cp" onClick={() => navigate("/home")}>
            home {">>"}
          </a>{" "}
          about{" "}
        </p>
      </div>
      <AboutComp />
      <GalleryComp />
      <ContactComp />
    </div>
  );
};

export default AboutScreen;
