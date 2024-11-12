"use client";
import { useOpenPopupContext } from "@/context/popup-open-context";
import Button from "../Button/Button";
import styles from "./Popup.module.scss";

const Popup = () => {
  const { isOpenPopup, setIsOpenPopup, setIsClickYes } = useOpenPopupContext();

  const handleClickYes = () => {
    setIsClickYes(true);
    setIsOpenPopup(false);
  };
  return (
    <div className={styles.popup}>
      <h1>Вы уверены, что хотите удалить данное изображение?</h1>
      <div className={styles.blockButton}>
        <Button color="blue" text="Да" onClick={() => handleClickYes()} />
        <Button color="blue" text="Нет" onClick={() => setIsOpenPopup(false)} />
      </div>
    </div>
  );
};

export default Popup;
