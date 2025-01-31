import React from "react";
import ContactComp from "../Components/About/ContactComp";
import FormComp from "../Components/Contact/FormComp";

const ContactScreen = () => {
  return (
    <div>
      <div class="heading">
        <h1>contact us</h1>
        <p>
          {" "}
          <a href="home.html">home {">>"}</a> contact{" "}
        </p>
      </div>
      <ContactComp />
      <FormComp />
    </div>
  );
};

export default ContactScreen;
