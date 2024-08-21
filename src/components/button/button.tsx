import { ButtonProps } from "./button.props";
import styles from "./button.module.scss";
import cn from "classnames";

const Button = ({ color, text }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.orange]: color == "orange",
        [styles.white]: color == "white",
      })}
    >
      {text}
    </button>
  );
};

export default Button;
