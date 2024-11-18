"use client";
import { useEffect } from "react";
import Button from "../Button/Button";
import styles from "./PopupDeleteImg.module.scss";
import { useOpenPopupContext } from "@/context/popup-open-context";

const PopupDeleteImg = () => {
  const { setIsOpenPopup, setIsClickYes } = useOpenPopupContext();

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
    <>
      <h1>Вы уверены, что хотите удалить данное изображение?</h1>
      <div className={styles.blockButton}>
        <Button color="blue" text="Да" onClick={handleClickYes} />
        <Button color="blue" text="Нет" onClick={closePopup} />
      </div>
    </>
  );
};

export default PopupDeleteImg;
