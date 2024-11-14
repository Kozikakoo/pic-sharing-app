import styles from "../../page.module.scss";
import Edit from "@/components/Edit/Edit";

export default function Home() {
  return (
    <main className={styles.main}>
      <Edit />
    </main>
  );
}
