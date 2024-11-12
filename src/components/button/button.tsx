import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";
import cn from "classnames";

const Button = ({
  color,
  text,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.orange]: color == "orange",
        [styles.white]: color == "white",
        [styles.blue]: color == "blue",
      })}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
