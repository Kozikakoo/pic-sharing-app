"use client";
import { useOpenPopupContext } from "@/context/popup-open-context";
import styles from "./Popup.module.scss";
import { PopupProps } from "./Popup.props";
import { useRouter } from "next/navigation";
import cn from "classnames";

const Popup = ({ children, type }: PopupProps) => {
  const { setIsOpenPopup } = useOpenPopupContext();
  const router = useRouter();

  const closePopup = () => {
    if (type == "delete") {
      setIsOpenPopup(false);
    }
    if (type == "edit") {
      router.back();
    }
  };

  return (
    <div
      className={cn(styles.popup, {
        [styles.popupDeleteImg]: type == "delete",
        [styles.popupEditImg]: type == "edit",
      })}
    >
      <div className={styles.popupClose} onClick={closePopup}>
        &times;
      </div>
      {children}
    </div>
  );
};

export default Popup;
