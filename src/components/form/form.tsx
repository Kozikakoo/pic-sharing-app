import { ReactNode } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.scss";
import { FormProps } from "./Form.props";
import cn from "classnames";

const Form = ({ children, title, textButton, className }: FormProps) => {
  return (
    <form className={cn(className, styles.form)}>
      <h1 className={styles.formTitle}>{title}</h1>
      {children}
      <Button
        color="orange"
        text={textButton}
        type="submit"
        className={styles.formButton}
      />
    </form>
  );
};

export default Form;
