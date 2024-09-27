import { ColorButtonProps } from "./colorButton.props";
import styles from "./colorButton.module.scss";

const ColorButton = ({ children, ...props }: ColorButtonProps) => {
  return (
    <button className={styles.circle} {...props}>
      {children}
    </button>
  );
};

export default ColorButton;
