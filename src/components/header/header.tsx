import Link from "next/link";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import Photo from "../Photo/Photo";

const Header = () => {
  const auth = false;

  return (
    <header className={styles.header}>
      <Logo />
      <Search />

      <Link href="/profile/id">
        <Photo className={styles.headerPhoto} />
      </Link>

      {auth && (
        <div className={styles.buttonBlock}>
          <Link href="/sign-in">
            <Button color="white" text="Войти" />
          </Link>
          <Link href="/sign-up">
            <Button color="orange" text="Регистрация" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
