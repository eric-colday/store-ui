"use client";

import { CategoriesProducts } from "../../../data";
import Link from "next/link";
import React from "react";
import styles from "./productCategory.module.css";

const getData = () => {
  const data = CategoriesProducts;

  if (data) {
    return data;
  }

  return notFound();
};

const ProductCategory = () => {
  const data = getData();

  return (
    <div className={styles.container}> 
      <div className={styles.grid}>
        {data.map((item) => (
          <Link key={item.id} href={`/boutique?cat=${item.slug}`}> 
            <div className={`${styles.card} ${styles[item.slug]}`}>
              <span>{item.title}</span>
            </div> 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
