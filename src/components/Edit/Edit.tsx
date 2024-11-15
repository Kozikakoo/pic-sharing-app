import Button from "../Button/Button";
import Input from "../Input/Input";
import Photo from "../Photo/Photo";
import styles from "./Edit.module.scss";

const Edit = () => {
  return (
    <div className={styles.edit}>
      <h1 className={styles.editTitle}>Изменение профиля</h1>
      <form className={styles.editForm}>
        <div>
          <p className={styles.label}>Фотография</p>
          <div className={styles.photoWithBtnBox}>
            <Photo className={styles.editPhoto} />
            <div className={styles.editBtnInput}>
              <Button color="white" text="Изменить" />
              <label className={styles.editPhotoLabel} htmlFor="photo">
                Фото
              </label>
              <Input className={styles.editPhotoInput} type="file" id="photo" />
            </div>
          </div>
        </div>

        <div className={styles.nameBox}>
          <Input id="name">
            <label className={styles.label} htmlFor="name">
              Имя
            </label>
          </Input>
          <Input id="lastname">
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
            id="description"
            name="description"
            placeholder="Расскажите о себе"
          />
        </div>

        <Input
          placeholder="Ваш ник для удобного поиска"
          defaultValue="aanagornaia"
          id="username"
        >
          <label className={styles.label} htmlFor="username">
            Имя пользователя
          </label>
        </Input>
        <p className={styles.usernameLink}>www.picsharing.ru/aanagornaia</p>
      </form>
    </div>
  );
};

export default Edit;
