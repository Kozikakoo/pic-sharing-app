import styles from "./Search.module.scss";
import Glass from "../../assets/glass.svg";

const Search = (): JSX.Element => {
  return (
    <div className={styles.containerSearch}>
      <input className={styles.search} placeholder="Поиск" />
      <Glass className={styles.glass} />
    </div>
  );
};

export default Search;
