"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../Form/Form";
import Input from "../Input/Input";
import styles from "./FormSignUp.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/schemes";
import { z } from "zod";
import cn from "classnames";

type FormFields = z.infer<typeof registerSchema>;

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, submitCount, isValid },
  } = useForm<FormFields>({
    resolver: zodResolver(registerSchema),
  });

  const disabledButton = (submitCount > 0 && !isValid) || isSubmitting;
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <Form
      title="Регистрация"
      textButton="Регистрация"
      question="Уже зарегистрированы?"
      textLink="Войти"
      onSubmit={handleSubmit(onSubmit)}
      disabled={disabledButton}
    >
      <div className={styles.inputBox}>
        <Input
          type="text"
          placeholder="Анастасия"
          id="name"
          labelFor="name"
          labelText="Имя"
          className={cn(styles.input, {
            [styles.errorInput]: errors.name,
          })}
          {...register("name")}
        />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.inputBox}>
        {" "}
        <Input
          type="email"
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
        {" "}
        <Input
          type="password"
          placeholder="Не менее 6 символов"
          id="password"
          labelFor="password"
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

      <div className={styles.inputBox}>
        <Input
          type="password"
          placeholder="Не менее 6 символов"
          id="confirmPassword"
          labelFor="confirmPassword"
          labelText="Подтвердите пароль"
          className={cn(styles.input, {
            [styles.errorInput]: errors.confirmPassword,
          })}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className={styles.error}>{errors.confirmPassword.message}</span>
        )}
      </div>
    </Form>
  );
};

export default FormSignUp;
