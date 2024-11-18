import styles from "./PopupEditImg.module.scss";
import Image from "next/image";
import picTest from "../../assets/canvas-image (2).png";
import Input from "../Input/Input";
const PopupEditImg = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Image src={picTest} fill alt="Рисунок" />
      </div>
      <div>
        <Input id="name-img" labelFor="name-img" labelText="Название" />
        <label htmlFor="description">Описание</label>
        <textarea id="description" />
      </div>
    </>
  );
};

export default PopupEditImg;
