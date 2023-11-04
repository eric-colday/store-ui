import PostCategory from "@/components/blog/postCategory/PostCategory";
import PostsList from "@/components/blog/postsList/PostsList";
import React from "react";
import styles from "./blog.module.css";

const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1; 
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.h2}>
          BLOG
          {cat ? ` - ${decodeURIComponent(cat)}` : ""}
        </h2>
        <p className={styles.desc}>
          Explorez notre blog captivant, où l'expertise rencontre la passion.
          Découvrez des articles inspirants, astuces et conseils pour enrichir
          votre vie.
        </p>
      </div>
      <PostCategory cat={cat} />
      <PostsList page={page} cat={cat} />
    </div>
  );
};

export default Blog;
