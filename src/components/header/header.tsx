import Logo from "../logo/logo";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};

export default Header;
