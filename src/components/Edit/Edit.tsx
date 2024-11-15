"use client";
import { editSchema } from "@/lib/schemes";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Photo from "../Photo/Photo";
import styles from "./Edit.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import cn from "classnames";
import { z } from "zod";

type FormFields = z.infer<typeof editSchema>;

const Edit = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid, submitCount },
  } = useForm<FormFields>({
    resolver: zodResolver(editSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.edit}>
      <h1 className={styles.title}>Изменение профиля</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={styles.label} htmlFor="photo">
            Фотография
          </label>
          <div className={styles.photoBox}>
            <Photo className={styles.photo} />
            <div className={styles.photoInput}>
              <Button color="white" text="Изменить" />
              <label className={styles.photoLabel} htmlFor="photo">
                Фото
              </label>
              <Input className={styles.inputGhost} type="file" id="photo" />
            </div>
          </div>
        </div>
        <div className={styles.nameBox}>
          <Input
            id="name"
            {...register("name")}
            className={cn({ [styles.errorInput]: errors.name })}
          >
            <label className={styles.label} htmlFor="name">
              Имя
            </label>
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </Input>

          <Input id="lastname" {...register("lastname")}>
            <label className={styles.label} htmlFor="lastname">
              Фамилия
            </label>
          </Input>
        </div>
        <div className={styles.columnBox}>
          <label htmlFor="description" className={styles.label}>
            Описание
          </label>
          <textarea
            {...register("description")}
            id="description"
            name="description"
            placeholder="Расскажите о себе"
          />
        </div>
        <Input
          {...register("username")}
          className={cn({ [styles.errorInput]: errors.username })}
          placeholder="Ваш ник для удобного поиска"
          defaultValue="aanagornaia"
          id="username"
        >
          <label className={styles.label} htmlFor="username">
            Имя пользователя
          </label>
          {errors.username && (
            <span className={styles.error}>{errors.username.message}</span>
          )}
        </Input>

        <p className={styles.usernameLink}>www.picsharing.ru/aanagornaia</p>
        <div className={styles.submitBtns}>
          <Button color="blue" text="Сбросить" />
          <Button color="blue" text="Сохранить" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Edit;
