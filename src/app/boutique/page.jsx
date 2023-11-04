"use client";

import ProductCategory from "@/components/boutique/productCategory/ProductCategory";
import ProductList from "@/components/boutique/productList/ProductList";
import SelectOption from "@/components/boutique/select/SelectOption";
import React, { useState } from "react";
import styles from "./boutique.module.css";

const Boutique = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  // const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  // const handleFilters = (e) => {
  //   const value = e.target.value;
  //   setFilters({
  //     ...filters,
  //     [e.target.name]: value,
  //   });
  // };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.h2}>
          {" "}
          BOUTIQUE
          {cat ? ` - ${decodeURIComponent(cat)}` : ""}
        </h2>
        <p className={styles.desc}>
          Plongez dans un univers captivant où passion et expertise se
          rejoignent. Explorez nos produits, source d'inspiration, astuces et
          conseils pour une vie épanouie.
        </p>
      </div>
      <ProductCategory page={page} cat={cat} />
      <div className={styles.categorieContainer}>
        {/* Select */}
        <SelectOption
          page={page}
          cat={cat}
          sort={sort}
          setSort={setSort}
        />
        <ProductList page={page} cat={cat} sort={sort} />
      </div>
    </div>
  );
};

export default Boutique;