import { ColorButtonProps } from "./colorButton.props";
import styles from "./colorButton.module.scss";

const ColorButton = ({ ...props }) => {
  return <button className={styles.circle} {...props}></button>;
};

export default ColorButton;
