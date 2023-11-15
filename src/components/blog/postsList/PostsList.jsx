import React from "react";
import styles from "./postsList.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Posts } from "../../../data";
import Pagination from "../../pagination/Pagination";

const getData = (page, cat) => {
  const data = cat ? Posts.filter((item) => item.catSlug === cat) : Posts;
  

  if (data) {
    return data;
  }

  return notFound();
};

const PostsList = ({ page, cat }) => {
  const data = getData(page, cat);
  const count = data.length;

  const POST_PER_PAGE = 6;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {data.map((item) => (
          <Link href={`/posts/${item.slug}`} key={item.id}>
            <div className={styles.card}>
              <img src={item.image} alt="blog1" className={styles.cardImage} />

              <div className={styles.cardContent}>
                <div className={styles.date}>
                  <span>{item.createdAt.substring(0, 10)} - </span>
                  <span className={styles.category}> {item.catSlug}</span>
                </div>
                <h2 className={styles.h3}>
                  {item.title.length > 10
                    ? `${item.title.slice(0, 28)}...`
                    : item.title}
                </h2>
                <p className={styles.p}>
                  {item.description.length > 50
                    ? `${item.description.slice(0, 47)}...`
                    : item.description}
                </p>
                <div className={styles.button}>Lire Plus ...</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default PostsList;
