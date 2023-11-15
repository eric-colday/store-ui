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
} from "../../redux/cartReducer.js";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Panier = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const router = useRouter();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const handleClick = () => {
    const data = {
      products: products,
      total: totalPrice(),
    };
    dispatch(resetCart());
    toast.success("Commande passée avec succès !");
    router.push("/commandes");
  };

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
                <p>Produit : {item.title}</p>
                <p> Taille : {item.size}</p>
                <p> Couleur: {item.color}</p>
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
                    onClick={() => {
                      dispatch(removeItem(item.id));
                      toast.success("Commande annulée !");
                    }}
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
              <span>Total: </span>
              <span>{totalPrice()} €</span>
            </div>
            <div className={styles.buttonFinals}>
              <div>
                <button className={styles.cartButton} onClick={handleClick}>
                  Acheter
                </button>
              </div>
              <div>
                <button
                  className={styles.cartButton}
                  onClick={() => {
                    dispatch(resetCart());
                    toast.success("Commande annulée !");
                  }}
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
