import CanvasPaint from "./components/canvas/canvas";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <CanvasPaint />
    </main>
  );
}
