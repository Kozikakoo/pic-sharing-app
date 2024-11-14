import Button from "../Button/Button";
import styles from "./Profile.module.scss";
import CardsGrid from "../CardsGrid/CardsGrid";
import Link from "next/link";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileImg}>
        <p className={styles.profileLetter}>А</p>
      </div>
      <h1 className={styles.profileName}>Анастасия Нагорная</h1>

      <p className={styles.profileUsername}>aanagornaia</p>
      <p className={styles.profileSub}>0 подписок</p>
      <div className={styles.buttonsBox}>
        <Button color="blue" text="Поделиться" />
        <Link href="edit-profile">
          <Button color="blue" text="Изменить профиль" />
        </Link>
      </div>
      <div className={styles.profileLinks}>
        <a className={styles.profileLink}>Мои рисунки</a>
        <a className={styles.profileLink}>Сохраненные</a>
      </div>
      <CardsGrid />
    </div>
  );
};

export default Profile;
