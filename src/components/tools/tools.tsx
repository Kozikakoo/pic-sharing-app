import {
  bottomRowColors,
  middleRowColors,
  paintColorsBrightness,
  topRowColors,
} from "@/lib/data";
import styles from "./tools.module.scss";
import { ToolsProps } from "./tools.props";

const Tools = ({ range }: ToolsProps) => {
  return (
    <div>
      <div className={styles.colorsBlock}>
        <div className={styles.brightness}>
          {paintColorsBrightness.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className={styles.colors}
            ></div>
          ))}
        </div>
        <div>
          <div className={styles.rowColors}>
            {" "}
            {topRowColors.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: color }}
                className={styles.colors}
              ></div>
            ))}
          </div>
          <div className={styles.rowColors}>
            {" "}
            {middleRowColors.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: color }}
                className={styles.colors}
              ></div>
            ))}
          </div>
          <div className={styles.rowColors}>
            {" "}
            {bottomRowColors.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: color }}
                className={styles.colors}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <input type="range" defaultValue={range} />
      </div>
    </div>
  );
};

export default Tools;
