import Featured from "@/components/featured/Featured";
import Slider from "@/components/slider/Slider";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.accueil}>
      <Slider />
      <Featured/>
    </div>
  );
}
