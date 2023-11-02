"use client";

import React, { useContext } from "react";
import styles from "./recentsPosts.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Posts } from "../../data";
import { ThemeContext } from "@/context/ThemeContext";

const getData = () => {
  const data = Posts;

  if (data) {
    return data;
  }

  return notFound();
};

const RecentsPosts = () => {
  const { theme } = useContext(ThemeContext);
  const data = getData();
  return (
    <div>
      <div className={styles.content}>
        <h2 className={styles.h2}>NOTRE BLOG</h2>
        <p className={styles.desc}>
          Explorez notre blog captivant, où l'expertise rencontre la passion.
          Découvrez des articles inspirants, astuces et conseils pour enrichir
          votre vie.
        </p>
      </div>
      <div className={styles.containerPosts}>
        <div className={styles.grid}>
          {data.map((item) => (
            <Link href={`/blog/${item.id}`} key={item.id}>
              <div
                className={styles.card}
                style={
                  theme === "dark"
                    ? { backgroundColor: "#0D2847" }
                    : { backgroundColor: "#FBFDFF" }
                }
              >
                <img
                  src={item.image}
                  alt="blog1"
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.h3}>
                    {item.title.length > 10
                      ? `${item.title.slice(0, 28)}...`
                      : item.title}
                  </h3>
                  <p className={styles.p}>
                    {item.description.length > 50
                      ? `${item.description.slice(0, 47)}...`
                      : item}
                  </p>
                  <button className={styles.button}>Lire plus...</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentsPosts;
