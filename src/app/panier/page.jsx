"use client";

import Link from "next/link";
import React from "react";
import styles from "./panier.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrease,
  increase,
  removeItem,
  resetCart,
} from "@/redux/cartReducer.js";

const Panier = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  console.log(products);

  return (
    <div>
      <div className={styles.cart2}>
        <h1 className={styles.cartTttle}>Panier</h1>
        <div className={styles.cartBox}>
          {products.map((item) => (
            <div key={item.id} className={styles.cartCont}>
              <div className={styles.cartWrap}>
                <img
                  className={styles.cartImg}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className={styles.cartInfo2}>
                <p>{item.title}</p>
                <p>{item.size}</p>
                <p>{item.color}</p>
                <p>
                  {item.quantity} x {item.price} €
                </p>
                <div className={styles.cartButtonsContainer}>
                  <div className={styles.cartButtons}>
                    <div
                      className={styles.buttonMath}
                      onClick={() =>
                        dispatch(
                          increase({
                            id: item.id,
                            quantity: 1,
                          })
                        )
                      }
                    >
                      +
                    </div>
                    <p className={styles.buttonQuantity}>{item.quantity}</p>
                    <div
                      className={styles.buttonMath}
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch(
                            decrease({
                              id: item.id,
                              quantity: 1,
                            })
                          );
                        } else {
                          dispatch(removeItem(item.id));
                        }
                      }}
                    >
                      -
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className={styles.cartButton}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {products.length === 0 ? null : (
          <div className={styles.cartPay}>
            <div className={styles.cartTotal}>
              <span >Sous-total: </span>
              <span>{totalPrice()} €</span>
            </div>
            <div className={styles.buttonFinals}>
              <div>
                <button className={styles.cartButton}>Acheter</button>
              </div>
              <div>
                <button
                  className={styles.cartButton}
                  onClick={() => dispatch(resetCart())}
                >
                  Vider le panier
                </button>
              </div>
            </div>
          </div>
        )}
        {products.length === 0 ? (
          <div className={styles.emptyCart}>
            <h3>Votre panier est vide</h3>
            <Link href="/boutique">
              <button className={styles.cartButton}> {"<"} Boutique </button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Panier;
