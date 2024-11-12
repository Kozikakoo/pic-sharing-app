import { ReactNode } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.scss";
import { FormProps } from "./Form.props";
import cn from "classnames";
import Link from "next/link";

const Form = ({
  children,
  title,
  textButton,
  question,
  textLink,
  className,
}: FormProps) => {
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
      <p className={styles.formQuestion}>
        {question + " "}
        <Link
          href={textLink == "Войти" ? "/sign-in" : "/sign-up"}
          className={styles.formLink}
        >
          {textLink}
        </Link>
      </p>
    </form>
  );
};

export default Form;
