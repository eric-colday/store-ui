import React from "react";
import styles from "./sinplePost.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Posts } from "@/data";

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
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/vercel.svg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>
                Lorem ipsum dolor sit amet
              </span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/home/insouciant.jpg"
            alt=""
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            // dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          beatae deleniti sunt fugit at! Sed accusamus, distinctio voluptate
          voluptates consequuntur ut ea! Tempore fugit ipsam earum numquam
          impedit voluptate dolore!
          <div className={styles.comment}>
            {/* <Comments postSlug={slug}/> */}
          </div>
        </div>
        {/* <Menu /> */}
      </div>
    </div>
  );
};

export default SinplePost;
