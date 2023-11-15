"use client";

import { ThemeContext } from "../../../context/ThemeContext";
import React, { useContext } from "react";
import styles from "./featured.module.css";
import { Products } from "../../../data.js";
import Link from "next/link";
import { notFound } from "next/navigation";

const getData = () => {
  const data = Products;

  if (data) {
    return data;
  }

  return notFound();
};

const Featured = () => {
  const { theme } = useContext(ThemeContext);
  const data = getData();

  return (
    <div>
      <div className={styles.content}>
        <h2 className={styles.h2}>PRODUITS EN VEDETTE</h2>
        <p className={styles.desc}>
          Découvrez notre collection de t-shirts, jeans et vestes tendance pour
          tous les styles. Des incontournables pour votre garde-robe!
        </p>
      </div>
      <div className={styles.containerProducts}>
        <div className={styles.grid}>
          {data.slice(0, 4).map((item) => (
            <Link href={`/produit/${item.slug}`} key={item.id}>
              <div
                className={styles.card}
                style={
                  theme === "dark"
                    ? { backgroundColor: "#0D2847" }
                    : { backgroundColor: "#FBFDFF" }
                }
              >
                <img
                  src={item.image[0]}
                  alt="featured1"
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.h3}>{item.title}</h3>
                  <p className={styles.p}>{item.description}</p>
                  <p className={styles.p}>{item.price}€</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
