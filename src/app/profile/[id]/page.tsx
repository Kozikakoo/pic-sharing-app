import styles from "../../page.module.scss";
import Profile from "@/components/Profile/Profile";

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
    </main>
  );
}