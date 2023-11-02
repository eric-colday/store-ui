import React from "react";
import styles from "./sinplePost.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Posts } from "@/data";
import SinglePost from "@/components/blog/single/SinglePost";

const getData = (slug) => {
  const data = Posts.find((item) => item.slug === slug);

  if (data) {
    return data;
  }

  return notFound();
};

const SinplePost = ({ params }) => {
  const { slug } = params;
  const data = getData(slug);

  return (
    <div className={styles.container}>
      <SinglePost data={data} />
    </div>
  );
};

export default SinplePost;
