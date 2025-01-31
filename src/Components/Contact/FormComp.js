import React from "react";

const FormComp = () => {
  return (
    <section class="contact">
      <div class="icons-container">
        <div class="icons">
          <i class="fas fa-phone"></i>
          <h3>our number</h3>
          <p>+91 6675457989</p>
          <p>+91 6675457989</p>
        </div>

        <div class="icons">
          <i class="fas fa-envelope"></i>
          <h3>our email</h3>
          <p>sankari@gmail.com</p>
          <p>sagi@gmail.com</p>
        </div>

        <div class="icons">
          <i class="fas fa-map-marker-alt"></i>
          <h3>our address</h3>
          <p>thiruvallur, india - 600067</p>
        </div>
      </div>

      <div class="row">
        <form action="">
          <h3>get in touch</h3>
          <div class="inputBox">
            <input type="text" placeholder="enter your name" class="box" />
            <input type="email" placeholder="enter your email" class="box" />
          </div>
          <div class="inputBox">
            <input type="number" placeholder="enter your number" class="box" />
            <input type="text" placeholder="enter your subject" class="box" />
          </div>
          <textarea placeholder="your message" cols="30" rows="10"></textarea>
          <input type="submit" value="send message" class="btn" />
        </form>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31071.305373729476!2d80.10702877451418!3d13.230765453904707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527dbe9ed7d5df%3A0xdca8159ce294ce1d!2sNew%20Erumaivettipalayam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1679206491501!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
};

export default FormComp;
