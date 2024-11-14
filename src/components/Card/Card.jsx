import Image from "next/image";
import styles from "./Card.module.scss";
import jj from "../../assets/canvas-image (2).png";
import user from "../../assets/user.jpg";
import ColorButton from "../ColorButton/ColorButton";
import Download from "../../assets/download.svg";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardPicBox}>
        <Image src={jj} fill={true} alt="dds" />
        <div className={styles.cardOverlay}>
          <ColorButton className={styles.cardOverlayBtn}>
            <Download />
          </ColorButton>
        </div>
      </div>
      <p className={styles.cardDescription}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <div className={styles.cardUser}>
        <div className={styles.cardImgBox}>
          <Image src={user} alt="fdf" fill={true} objectFit="cover" />
        </div>
        <p className={styles.cardUsername}>Анастасия Нагорная</p>
      </div>
    </div>
  );
};

export default Card;
