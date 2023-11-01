"use client";

import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "/home/Male-Female-T-Shirts-Mockup.jpg",
    "/home/jeans.jpeg",
    "/home/shoes.jpeg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  //timer sliders
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" className={styles.img} />
        <img src={data[1]} alt="" className={styles.img} />
        <img src={data[2]} alt="" className={styles.img} />
      </div>
      <div className={styles.icons}>
        <div
          className={styles.icon}
          onClick={prevSlide}
          style={{
            border: "2px solid #468bff",
          }}
        >
          <WestOutlinedIcon
            style={{
              color: "#468bff",
            }}
          />
        </div>
        <div
          className={styles.icon}
          onClick={nextSlide}
          style={{
            border: "2px solid #468bff",
          }}
        >
          <EastOutlinedIcon
            style={{
              color: "#468bff",
            }}
          />
        </div>
      </div>
      <div className={styles.bannerContent}>
        <h2 className={styles.h2}>NecStore</h2>
        <p className={styles.p}>
        Une collection tendance de t-shirts, 
        jeans et vestes pour un style unique. 
        Exprimez-vous avec notre mode de qualité !
        </p>
        <button className={`${styles.btn} ${styles.btnPrimary}`}>
          Découvrir
        </button>
      </div>
    </div>
  );
};

export default Slider;
