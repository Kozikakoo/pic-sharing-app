import styles from "./search.module.scss";
import Glass from "../../assets/glass.svg";
import Input from "../Input/Input";

const Search = (): JSX.Element => {
  return (
    <div className={styles.containerSearch}>
      <Input className={styles.search} placeholder="Поиск" />
      <Glass className={styles.glass} />
    </div>
  );
};

export default Search;
