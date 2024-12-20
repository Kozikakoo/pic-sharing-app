"use client";
import Form from "../Form/Form";
import Input from "../Input/Input";
import styles from "./FormSignIn.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/lib/schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import cn from "classnames";

type FormFields = z.infer<typeof loginSchema>;

const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid, submitCount },
  } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  });

  const disabledButton = (submitCount > 0 && !isValid) || isSubmitting;

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <Form
      title="Авторизация"
      textButton="Войти"
      className={styles.formSignIn}
      question="Ещё нет учетной записи?"
      textLink="Регистрация"
      disabled={disabledButton}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className={styles.inputBox}>
          <Input
            type="text"
            placeholder="example@yandex.ru"
            id="email"
            labelFor="email"
            labelText="Почта"
            className={cn(styles.input, {
              [styles.errorInput]: errors.email,
            })}
            {...register("email")}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        <div className={styles.inputBox}>
          <Input
            type="password"
            placeholder="Не менее 6 символов"
            id="password"
            labelFor="passwprd"
            labelText="Пароль"
            className={cn(styles.input, {
              [styles.errorInput]: errors.password,
            })}
            {...register("password")}
          />
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
        </div>
      </div>
    </Form>
  );
};

export default FormSignIn;
