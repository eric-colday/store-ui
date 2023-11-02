import React from "react";
import styles from "./singlePost.module.css";
import Link from "next/link";

const SinglePost = ({ data }) => {
  return (
    <div className={styles.singlePost}>
      <div className={styles.singlePostWrapper}>
        <img
          src={data.image}
          alt={data.title}
          className={styles.singlePostImg}
        />
        {/* <input type="text" className={styles.singlePostTitleInput} autoFocus /> */}
        <h1 className={styles.singlePostTitle}>
          {data.title}
          {/* <div className={styles.singlePostEdit}>
            <i className={styles.singlePostIcon}>Éditer</i>
            <i className={styles.singlePostIcon}>Supprimer</i>
          </div> */}
        </h1>
        <div className={styles.singlePostInfo}>
          <span className={styles.singlePostAuthor}>
            Author:
            <Link href="/#" className="link">
              <b> Éric Colday</b>
            </Link>
          </span>
          <span className={styles.singlePostDate}>
            {" "}
            {new Date(data.createdAt).toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
          </span>
        </div>
        {/* <textarea className={styles.singlePostDescInput} value="" /> */}
        <p className={styles.singlePostDesc}>{data.description} </p>
        {/* <button className={styles.singlePostButton}>Update</button> */}
      </div>
    </div>
  );
};

export default SinglePost;
