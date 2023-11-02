import Banner from "@/components/banner/Banner";
import Featured from "@/components/featured/Featured";
import RecentsPosts from "@/components/recentsPosts/RecentsPosts";
import Slider from "@/components/slider/Slider";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.accueil}>
      <Slider />
      <div className={styles.container}>
        <Featured />
      </div>
      <Banner />
      <div className={styles.container}>
        <RecentsPosts />
      </div>
    </div>
  );
}
