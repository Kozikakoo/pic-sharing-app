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
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(registerSchema),
  });

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
    >
      <div className={styles.inputBox}>
        <Input
          placeholder="Анастасия"
          id="name"
          className={cn(styles.formInput, {
            [styles.errorInput]: errors.name,
          })}
          {...register("name")}
        >
          <label htmlFor="name" className={styles.inputName}>
            Имя
          </label>
        </Input>
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.inputBox}>
        {" "}
        <Input
          placeholder="example@yandex.ru"
          id="email"
          className={cn(styles.formInput, {
            [styles.errorInput]: errors.email,
          })}
          {...register("email")}
        >
          <label htmlFor="email" className={styles.inputName}>
            Почта
          </label>
        </Input>
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.inputBox}>
        {" "}
        <Input
          placeholder="Не менее 6 символов"
          id="password"
          className={cn(styles.formInput, {
            [styles.errorInput]: errors.password,
          })}
          {...register("password")}
        >
          <label htmlFor="password" className={styles.inputName}>
            Пароль
          </label>
        </Input>
        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
      </div>

      <div className={styles.inputBox}>
        <Input
          placeholder="Не менее 6 символов"
          id="confirmPassword"
          className={cn(styles.formInput, {
            [styles.errorInput]: errors.confirmPassword,
          })}
          {...register("confirmPassword")}
        >
          <label htmlFor="password" className={styles.inputName}>
            Подтвердите пароль
          </label>
        </Input>
        {errors.confirmPassword && (
          <span className={styles.error}>{errors.confirmPassword.message}</span>
        )}
      </div>
    </Form>
  );
};

export default FormSignUp;
