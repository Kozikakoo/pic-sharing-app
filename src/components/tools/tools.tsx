import styles from "./tools.module.scss";
import { ToolsProps } from "./tools.props";

const Tools = ({ range }: ToolsProps) => {
  return (
    <div>
      <div>
        <button className={styles.buttonBlack} type="button"></button>
        <button className={styles.buttonRed} type="button"></button>
        <button className={styles.buttonGreen} type="button"></button>
      </div>
      <div>
        <input type="range" defaultValue={range} />
      </div>
    </div>
  );
};

export default Tools;
