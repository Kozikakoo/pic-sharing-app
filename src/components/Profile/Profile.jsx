import Button from "../Button/Button";
import styles from "./Profile.module.scss";
import Card from "../Card/Card";

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
        <Button color="blue" text="Изменить профиль" />
      </div>
      <div className={styles.profileLinks}>
        <a className={styles.profileLink}>Мои рисунки</a>
        <a className={styles.profileLink}>Сохраненные</a>
      </div>

      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Profile;
