import cn from "classnames";
import styles from "./input.module.scss";
import { InputProps } from "./input.props";

const Input = ({ className, children, placeholder, ...props }: InputProps) => {
  return (
    <input
      className={cn(styles.input, className)}
      placeholder={placeholder}
      {...props}
    >
      {children}
    </input>
  );
};

export default Input;
