import { Karantina } from "next/font/google";
import styles from "./logo.module.scss";
import cn from "classnames";

const karantina = Karantina({ subsets: ["latin"], weight: ["400", "700"] });

const Logo = () => {
  return (
    <div className={cn(karantina.className, styles.containerLogo)}>
      <p className={styles.logo}>PicSharing</p>
    </div>
  );
};

export default Logo;
