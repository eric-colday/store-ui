import Images from "../../../components/produit/images/Images";
import ProductInfos from "../../../components/produit/productInfos/ProductInfos";
import { Products } from "../../../data";
import React from "react";
import styles from "./produit.module.css";

const getData = (slug) => {
  const data = Products.find((item) => item.slug === slug);

  if (data) {
    return data;
  }

  return notFound();
};

export async function generateMetadata({ params }) {
  const data = await getData(params.slug);
  return {
    title: data.title,
    description: data.description, 
  };
}

const Produit = ({ params }) => {
  const { slug } = params;
  const data = getData(slug);

  return (
    <div className={styles.item}>
      <Images data={data}/>
      <ProductInfos data={data}/>
    </div>
  );
};

export default Produit;
