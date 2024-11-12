import Form from "../Form/Form";
import Input from "../Input/Input";
import styles from "./FormSignIn.module.scss";

const FormSignIn = () => {
  return (
    <Form title="Авторизация" textButton="Войти" className={styles.formSignIn}>
      <div>
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
      </div>
    </Form>
  );
};

export default FormSignIn;
