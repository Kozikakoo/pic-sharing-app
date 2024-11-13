import Image from "next/image";
import styles from "./Card.module.scss";
import jj from "../../assets/canvas-image (2).png";
import user from "../../assets/user.jpg";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardPicBox}>
        <Image src={jj} fill={true} alt="dds" />
      </div>
      <p className={styles.cardDescription}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      <div className={styles.cardImgBox}>
        <Image src={user} alt="fdf" fill={true} objectFit="cover" />
      </div>
    </div>
  );
};

export default Card;
