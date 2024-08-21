import { Karantina } from "next/font/google";
import styles from "./logo.module.scss";

const karantina = Karantina({ subsets: ["latin"], weight: ["400", "700"] });

const Logo = () => {
  return (
    <div className={karantina.className}>
      <p className={styles.logo}>PicSharing</p>
    </div>
  );
};

export default Logo;
