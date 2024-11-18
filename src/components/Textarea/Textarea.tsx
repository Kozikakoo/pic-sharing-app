import styles from "./Textarea.module.scss";
import { TextareaProps } from "./Textarea.props";
const Textarea = ({ labelFor, labelText, ...props }: TextareaProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={labelFor} className={styles.label}>
        {labelText}
      </label>
      <textarea className={styles.textarea} {...props} />
    </div>
  );
};

export default Textarea;
