"use client";

import React from "react";
import styles from "./commandes.module.css";
import { Orders } from "@/data";

const getData = () => {
  const data = Orders;

  if (data) {
    return data;
  }

  return notFound();
};

const Commandes = () => {
  const data = getData();

  return (
    <div>
      <div className={styles.cart2}>
        <h1 className={styles.cartTttle}>Commandes</h1>
        <div>
          {data.map((item) => (
            <div key={item.id} className={styles.cartCont}>  
              <div className={styles.cartWrap}>
                <p>Commande ID: {item.id}</p>
                <p>
                  {" "}
                  Date :{" "}
                  {new Date(item.createdAt).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",  
                  })}
                </p>
                <p className={styles.cartTotal}>Total: {item.total}€</p>
                <div>
                  <div className={styles.cartStatus}>
                    Statut:{" "}
                    <span
                      className={
                        item.status === "En cours"
                          ? styles.cartStatusGreen
                          : styles.cartStatusRed
                      }
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.cartInfo2}>
                <div className={styles.cartInfo}>
                  Produits :
                  {item.products.map((product) => (
                    <div key={product.id} className={styles.cartProducts}>
                      <img
                        className={styles.cartImg}
                        src={product.image}
                        alt={product.title}
                      />
                      <span>
                        {product.title} x {product.quantity} quantité
                        {product.quantity > 1 ? "s" : ""}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commandes;
