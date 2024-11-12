import cn from "classnames";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.props";

const Input = ({ className, children, placeholder, ...props }: InputProps) => {
  return (
    <>
      {children}
      <input
        className={cn(styles.input, className)}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

export default Input;
