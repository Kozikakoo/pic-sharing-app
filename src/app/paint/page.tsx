"use client";
import Overlay from "@/components/Overlay/Overlay";
import CanvasPaint from "../../components/Canvas/Canvas";
import styles from "../page.module.scss";
import Popup from "@/components/Popup/Popup";
import { useOpenPopupContext } from "@/context/popup-open-context";
import PopupDeleteImg from "@/components/PopupDeleteImg/PopupDeleteImg";

export default function Home() {
  const { isOpenPopup } = useOpenPopupContext();

  return (
    <main className={styles.main}>
      {isOpenPopup && (
        <Overlay>
          <Popup type="delete">
            <PopupDeleteImg />
          </Popup>
        </Overlay>
      )}
      <CanvasPaint />
    </main>
  );
}
