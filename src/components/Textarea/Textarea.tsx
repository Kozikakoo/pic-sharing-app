import styles from "./Textarea.module.scss";
import { TextareaProps } from "./Textarea.props";
const Textarea = ({ labelFor, labelText, ...props }: TextareaProps) => {
  return (
    <>
      <label htmlFor={labelFor} className={styles.label}>
        {labelText}
      </label>
      <textarea className={styles.textarea} {...props} />
    </>
  );
};

export default Textarea;
