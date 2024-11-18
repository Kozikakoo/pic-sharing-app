import styles from "./PopupEditImg.module.scss";
import Image from "next/image";
import picTest from "../../assets/canvas-image (2).png";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import { tags } from "@/lib/data";
const PopupEditImg = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperImg}>
        <Image src={picTest} fill alt="Рисунок" />
      </div>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>Редактирование изображения</h1>
        <Input id="name-img" labelFor="name-img" labelText="Название" />
        <Textarea
          labelFor="description-img"
          labelText="Описание"
          id="description-img"
        />
        <div>
          <p className={styles.tags}>Теги</p>
          {tags.map((i, index) => {
            return (
              <button key={index} className={styles.tag}>
                {i}
              </button>
            );
          })}
        </div>
        <div className={styles.btnsBlock}>
          <Button color="blue" text="Сохранить" />
          <Button color="red" text="Удалить рисунок" />
        </div>
      </div>
    </div>
  );
};

export default PopupEditImg;
