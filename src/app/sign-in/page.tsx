import styles from "../page.module.scss";
import Overlay from "@/components/Overlay/Overlay";
import FormSignIn from "@/components/FormSignIn/FormSignIn";

export default function Home() {
  return (
    <main className={styles.main}>
      <Overlay>
        <FormSignIn />
      </Overlay>
    </main>
  );
}
