"use client";
import { ReactNode, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.scss";
import { FormProps } from "./Form.props";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Form = ({
  children,
  title,
  textButton,
  question,
  textLink,
  className,
  ...props
}: FormProps) => {
  const router = useRouter();

  useEffect(() => {
    const overlay = document.getElementById("overlay");

    window.addEventListener("click", (e) => {
      if (overlay == e.target) {
        router.push("/");
      }
    });
  }, []);

  return (
    <form className={cn(className, styles.form)} noValidate {...props}>
      <Link href="/">
        <div className={styles.formClose}>&times;</div>
      </Link>
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
