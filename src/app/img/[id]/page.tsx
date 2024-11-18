import Overlay from "@/components/Overlay/Overlay";
import styles from "../../page.module.scss";

import Popup from "@/components/Popup/Popup";
import CanvasPaint from "@/components/Canvas/Canvas";
import PopupEditImg from "@/components/PopupEditImg/PopupEditImg";

export default function Home() {
  return (
    <main className={styles.main}>
      <Overlay>
        <Popup type="edit">
          <PopupEditImg />
        </Popup>
      </Overlay>
      <CanvasPaint />
    </main>
  );
}
