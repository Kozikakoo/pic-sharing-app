import Overlay from "@/components/overlay/overlay";
import CanvasPaint from "../../components/canvas/canvas";
import styles from "../page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Overlay>Nt</Overlay>
      <CanvasPaint />
    </main>
  );
}
