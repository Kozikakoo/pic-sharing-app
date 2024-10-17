import Button from "../button/button";
import styles from "./popup.module.scss";

const Popup = () => {
  return (
    <div className={styles.popup}>
      <h1>Вы уверены, что хотите удалить данное изображение?</h1>
      <div className={styles.blockButton}>
        <Button color="blue" text="Да" onClick={}></Button>
        <Button color="blue" text="Нет" onClick={}></Button>
      </div>
    </div>
  );
};

export default Popup;
