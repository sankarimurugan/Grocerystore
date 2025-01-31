import React, { useRef, useState } from "react";
import { home1, home2 } from "../assets/image";
import { home_head } from "../DataStore/Dummyjson";
import DetailComp from "../Components/Home/DetailComp";
import LimitedSale from "../Components/Home/LimitedSale";
import ReviewComp from "../Components/Home/ReviewComp";
import ProductList from "../Components/Home/ProductList";
import CounterComp from "../Components/Home/CounterComp";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const slidesRef = useRef(null);

  const next = () => {
    if (slidesRef.current) {
      const slides = slidesRef.current.querySelectorAll(".slide");
      slides[index].classList.remove("active");
      const nextIndex = (index + 1) % slides.length;
      setIndex(nextIndex);
      slides[nextIndex].classList.add("active");
    }
  };

  const prev = () => {
    if (slidesRef.current) {
      const slides = slidesRef.current.querySelectorAll(".slide");
      slides[index].classList.remove("active");
      const prevIndex = (index - 1 + slides.length) % slides.length;
      setIndex(prevIndex);
      slides[prevIndex].classList.add("active");
    }
  };

  return (
    <div>
      <section className="home homs">
        <div
          className="fas fa-angle-right next-slide absolut-arr-left"
          onClick={next}
        />
        <div className="slides-container" ref={slidesRef}>
          {home_head?.map((item, ind) => {
            return (
              <div
                key={ind}
                className={`slide ${ind === index ? "active" : ""}`}
              >
                <div className="content">
                  <span>{item?.para}</span>
                  <h3>{item?.offer}</h3>
                  <a className="btn">shop now</a>
                </div>
                <div className="image">
                  <img
                    src={item?.img}
                    style={{ height: "40rem", width: "40rem" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="fas fa-angle-left prev-slide absolut-arr-right"
          onClick={prev}
        />
      </section>
      {/* <CounterComp /> */}
      <DetailComp />
      <LimitedSale />
      <ReviewComp />
      <ProductList />
    </div>
  );
};

export default HomeScreen;
