import ProductCategory from "@/components/boutique/productCategory/ProductCategory";
import ProductList from "@/components/boutique/productList/ProductList";
import React from "react";
import styles from "./boutique.module.css";

const Boutique = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.h2}> 
          BOUTIQUE
          {cat ? ` - ${decodeURIComponent(cat)}` : ""}
        </h2>
        <p className={styles.desc}>
          Plongez dans un univers captivant où passion et expertise se
          rejoignent. Explorez nos produits, source d'inspiration, astuces et
          conseils pour une vie épanouie. 
        </p>
      </div>
      <ProductCategory cat={cat} />
      <ProductList page={page} cat={cat} />
    </div>
  );
};

export default Boutique;
