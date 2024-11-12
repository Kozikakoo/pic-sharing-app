"use client";
import { useOpenPopupContext } from "@/context/popup-open-context";
import Button from "../Button/Button";
import styles from "./Popup.module.scss";
import { useEffect } from "react";

const Popup = () => {
  const { isOpenPopup, setIsOpenPopup, setIsClickYes } = useOpenPopupContext();

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  const handleClickYes = () => {
    setIsClickYes(true);
    closePopup();
  };

  useEffect(() => {
    const overlay = document.getElementById("overlay");

    window.addEventListener("click", (e) => {
      if (overlay == e.target) {
        closePopup();
      }
    });
  }, []);

  return (
    <div className={styles.popup}>
      <div className={styles.popupClose} onClick={closePopup}>
        &times;
      </div>
      <h1>Вы уверены, что хотите удалить данное изображение?</h1>
      <div className={styles.blockButton}>
        <Button color="blue" text="Да" onClick={() => handleClickYes()} />
        <Button color="blue" text="Нет" onClick={() => setIsOpenPopup(false)} />
      </div>
    </div>
  );
};

export default Popup;
