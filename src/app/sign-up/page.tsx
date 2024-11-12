import Form from "@/components/Form/Form";
import styles from "../page.module.scss";
import Overlay from "@/components/Overlay/Overlay";
import FormSignUp from "@/components/FormSignUp/FormSignUp";

export default function Home() {
  return (
    <main className={styles.main}>
      <Overlay>
        <FormSignUp />
      </Overlay>
    </main>
  );
}
