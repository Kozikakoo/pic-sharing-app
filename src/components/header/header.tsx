import Link from "next/link";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../search/search";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Search />
      <div className={styles.buttonBlock}>
        <Link href="/sign-in">
          <Button color="white" text="Войти" />
        </Link>
        <Link href="/sign-up">
          <Button color="orange" text="Регистрация" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
