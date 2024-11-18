import styles from "../../page.module.scss";
import EditProfile from "@/components/EditProfile/EditProfile";

export default function Home() {
  return (
    <main className={styles.main}>
      <EditProfile />
    </main>
  );
}
