import cn from "classnames";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.props";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, placeholder, ...props }, ref) => {
    return (
      <>
        {children}
        <input
          ref={ref}
          className={cn(styles.input, className)}
          placeholder={placeholder}
          {...props}
        />
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
