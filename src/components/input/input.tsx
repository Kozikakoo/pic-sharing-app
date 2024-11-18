import cn from "classnames";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.props";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      classNameLabel,
      children,
      placeholder,
      labelFor,
      labelText,
      ...props
    },
    ref
  ) => {
    return (
      <div className={styles.wrapper}>
        <label className={cn(classNameLabel, styles.label)} htmlFor={labelFor}>
          {labelText}
        </label>
        <input
          ref={ref}
          className={cn(styles.input, className)}
          placeholder={placeholder}
          {...props}
        />
        {children}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
