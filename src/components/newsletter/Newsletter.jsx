import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <div>S'INSCRIRE À LA NEWSLETTER :</div>
        <div className={styles.mail}>
          <input
            type="text"
            placeholder="Entre ton e-mail..."
            className={styles.input}
          />
          <button className={styles.button}>REJOINS-NOUS</button>
        </div>
        <div className="styles.icons">
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
