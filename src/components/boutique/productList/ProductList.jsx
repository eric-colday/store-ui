"use client";

import Pagination from "@/components/pagination/Pagination";
import { Products } from "@/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./productList.module.css";

const getData = (page, cat) => {
  const data = cat ? Products.filter((item) => item.catSlug === cat) : Products;

  if (data) {
    return data;
  }

  return notFound();
};

const ProductList = ({ page, cat, filters, sort }) => {
  const data = getData(page, cat);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const count = data.length;

  const POST_PER_PAGE = 6;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  // useEffect(() => {
  //   cat &&
  //     setFilteredProducts(
  //       data.filter((item) =>
  //         Object.entries(filters).every(([key, value]) => item[key] === value)
  //       )
  //     );
  // }, [data, filters, cat]);

  // useEffect(() => {
  //   if (sort === "newest") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.createdAt - b.createdAt)
  //     );
  //   } else if (sort === "asc") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.price - b.price)
  //     );
  //   } else {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => b.price - a.price)
  //     );
  //   }
  // }, [sort]);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {data.map((item) => (
          <Link href={`/produit/${item.slug}`} key={item.id}>
            <div className={styles.card}>
              <img src={item.image[0]} alt="blog1" className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.h3}>{item.title}</h3>
                <div>{item.price} € </div>
              </div>
            </div> 
          </Link>
        ))}
        {/* {cat
          ? filteredProducts.map((item) => (
              <Link href={`/produits/${item.slug}`} key={item.id}>
                <div className={styles.card}>
                  <img
                    src={item.image}
                    alt="blog1"
                    className={styles.cardImage}
                  />

                  <div className={styles.cardContent}>
                    <h3 className={styles.h3}>{item.name}</h3>
                    <div>{item.price} € </div>
                  </div>
                </div>
              </Link>
            ))
          : data.map((item) => (
              <Link href={`/produits/${item.slug}`} key={item.id}>
                <div className={styles.card}>
                  <img
                    src={item.image}
                    alt="blog1"
                    className={styles.cardImage}
                  />

                  <div className={styles.cardContent}>
                    <h3 className={styles.h3}>{item.name}</h3>
                    <div>{item.price} € </div>
                  </div>
                </div>
              </Link>
            ))} */}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default ProductList;
