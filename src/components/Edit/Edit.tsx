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
            <Button color="white" text="Изменить" />
          </div>
        </div>

        <div className={styles.nameBox}>
          <Input>
            <label className={styles.label}>Имя</label>
          </Input>
          <Input>
            <label className={styles.label}>Фамилия</label>
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

        <Input placeholder="Ваш ник для удобного поиска">
          <label className={styles.label}>Имя пользователя</label>
        </Input>

        {/*  <Input placeholder="" type="file" id="photo" /> */}
      </form>
    </div>
  );
};

export default Edit;
