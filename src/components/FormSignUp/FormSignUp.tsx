import Form from "../Form/Form";
import Input from "../Input/Input";
import styles from "./FormSignUp.module.scss";

const FormSignUp = () => {
  return (
    <Form
      title="Регистрация"
      textButton="Регистрация"
      question="Уже зарегистрированы?"
      textLink="Войти"
    >
      <Input placeholder="Анастасия" id="name" className={styles.formInput}>
        <label htmlFor="name" className={styles.inputName}>
          Имя
        </label>
      </Input>
      <Input
        placeholder="example@yandex.ru"
        id="email"
        className={styles.formInput}
      >
        <label htmlFor="email" className={styles.inputName}>
          Почта
        </label>
      </Input>
      <Input
        placeholder="Не менее 6 символов"
        id="password"
        className={styles.formInput}
      >
        <label htmlFor="password" className={styles.inputName}>
          Пароль
        </label>
      </Input>
      <Input
        placeholder="Не менее 6 символов"
        id="password"
        className={styles.formInput}
      >
        <label htmlFor="password" className={styles.inputName}>
          Подтвердите пароль
        </label>
      </Input>
    </Form>
  );
};

export default FormSignUp;
