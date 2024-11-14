import Card from "../Card/Card";
import styles from "./CardsGrid.module.scss";

const CardsGrid = () => {
  return (
    <div className={styles.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardsGrid;
