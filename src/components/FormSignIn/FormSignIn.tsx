"use client";
import Form from "../Form/Form";
import Input from "../Input/Input";
import styles from "./FormSignIn.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

type FormFields = z.infer<typeof loginSchema>;

const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  });

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
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className={styles.inputBox}>
          <Input
            type="text"
            placeholder="example@yandex.ru"
            id="email"
            className={styles.formInput}
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
          <Input
            type="password"
            placeholder="Не менее 6 символов"
            id="password"
            className={styles.formInput}
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
      </div>
    </Form>
  );
};

export default FormSignIn;
