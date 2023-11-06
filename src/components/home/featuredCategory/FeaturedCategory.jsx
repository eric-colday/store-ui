import Link from "next/link";
import React from "react";
import styles from "./featuredCategory.module.css";

const featuredCategory = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={styles.featuredOne}>
            <Link href="categories/furnitures">
              <div id="img1" className={styles.lilOverlay}></div>
              <img
                src="/home/tennis-lacets.webp"
                alt="img1"
                className={styles.img}
              />
              <p className={styles.mainDescription}>Live Comfortably</p>
            </Link>
          </div>
          <div className={styles.featuredTwo}>
            <Link href="categories/skin-care">
              <div id="img2" className={styles.lilOverlay}></div>
              <img
                src="/home/tennis-lacets.webp"
                alt="img2"
                className={styles.img}
              />
              <p className={styles.mainDescription}>Skincare</p>
            </Link>
          </div>
          <div className={styles.featuredFour}>
            <Link href="categories/kitchen">
              <div id="img3" className={styles.lilOverlay}></div>
              <img
                src="/home/tennis-lacets.webp"
                alt="img3"
                className={styles.img}
              />
              <p className={styles.mainDescription}>Kitchen</p>
            </Link>
          </div>
          <div className={styles.featuredLow}>
            <Link href="categories/electronics">
              <div id="img4" className={styles.lilOverlay}></div>
              <img
                src="/home/tennis-lacets.webp"
                alt="img4"
                className={styles.img}
              />
              <p className={styles.mainDescription}>Electronics</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featuredCategory;
