import Button from "../button/button";
import Logo from "../logo/logo";
import Search from "../search/search";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Search />
      <div className={styles.buttonBlock}>
        <Button color="white" text="Войти" />
        <Button color="orange" text="Регистрация" />
      </div>
    </header>
  );
};

export default Header;
