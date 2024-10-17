"use client";
import Overlay from "@/components/overlay/overlay";
import CanvasPaint from "../../components/canvas/canvas";
import styles from "../page.module.scss";
import Popup from "@/components/popup/popup";
import { useOpenPopupContext } from "@/context/popup-open-context";

export default function Home() {
  const { isOpenPopup } = useOpenPopupContext();

  return (
    <main className={styles.main}>
      {isOpenPopup && (
        <Overlay>
          <Popup />
        </Overlay>
      )}
      <CanvasPaint />
    </main>
  );
}
