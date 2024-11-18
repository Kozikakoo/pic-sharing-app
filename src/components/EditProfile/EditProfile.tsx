"use client";
import { editProfileSchema } from "@/lib/schemes";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Photo from "../Photo/Photo";
import styles from "./EditProfile.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import cn from "classnames";
import { z } from "zod";
import Textarea from "../Textarea/Textarea";

type FormFields = z.infer<typeof editProfileSchema>;

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid, submitCount },
  } = useForm<FormFields>({
    resolver: zodResolver(editProfileSchema),
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
              <Input
                className={styles.inputGhost}
                type="file"
                id="photo"
                labelFor="photo"
                labelText="Фото"
                classNameLabel={styles.photoLabel}
              />
            </div>
          </div>
        </div>
        <div className={styles.nameBox}>
          <Input
            id="name"
            labelFor="name"
            labelText="Имя"
            {...register("name")}
            className={cn({ [styles.errorInput]: errors.name })}
          >
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </Input>

          <Input
            id="lastname"
            labelFor="lastname"
            labelText="Фамилия"
            {...register("lastname")}
          />
        </div>
        <div className={styles.columnBox}>
          <Textarea
            {...register("description")}
            id="description"
            name="description"
            placeholder="Расскажите о себе"
            labelFor="description"
            labelText="Описание"
          />
        </div>
        <Input
          {...register("username")}
          className={cn({ [styles.errorInput]: errors.username })}
          placeholder="Ваш ник для удобного поиска"
          defaultValue="aanagornaia"
          id="username"
          labelFor="username"
          labelText="Имя пользователя"
        >
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

export default EditProfile;
